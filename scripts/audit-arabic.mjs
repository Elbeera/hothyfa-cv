import fs from "node:fs";
import ts from "typescript";

const source = fs.readFileSync(
    "src/app/page.tsx",
    "utf8",
);

const file = ts.createSourceFile(
    "page.tsx",
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
);

const declarations = new Map();

function walk(node, callback) {
    callback(node);
    ts.forEachChild(node, (child) => walk(child, callback));
}

walk(file, (node) => {
    if (
        ts.isVariableDeclaration(node) &&
        ts.isIdentifier(node.name)
    ) {
        declarations.set(node.name.text, node.initializer);
    }
});

function propertyName(node) {
    if (
        ts.isIdentifier(node) ||
        ts.isStringLiteral(node)
    ) {
        return node.text;
    }

    return null;
}

const dictionary = declarations.get("arTranslations");

if (!dictionary || !ts.isObjectLiteralExpression(dictionary)) {
    throw new Error("Arabic translation dictionary not found");
}

const translations = new Map();

for (const property of dictionary.properties) {
    if (!ts.isPropertyAssignment(property)) continue;

    const key = propertyName(property.name);
    const value = property.initializer;

    if (key && ts.isStringLiteralLike(value)) {
        translations.set(key, value.text);
    }
}

const required = new Set();

const translatableFields = new Set([
    "title",
    "description",
    "tag",
    "role",
    "period",
    "company",
    "summary",
    "summarySecondary",
    "bullets",
]);

function collectContent(node) {
    if (!node) return;

    if (ts.isStringLiteralLike(node)) {
        required.add(node.text);
        return;
    }

    if (ts.isArrayLiteralExpression(node)) {
        node.elements.forEach(collectContent);
        return;
    }

    if (ts.isObjectLiteralExpression(node)) {
        for (const property of node.properties) {
            if (!ts.isPropertyAssignment(property)) continue;

            const name = propertyName(property.name);

            if (translatableFields.has(name)) {
                collectContent(property.initializer);
            }
        }
    }
}

for (const name of [
    "summaryParagraphs",
    "impactItems",
    "certificationItems",
    "experienceItems",
    "projectItems",
    "strengthItems",
]) {
    const node = declarations.get(name);

    if (!node) {
        throw new Error(`Content collection not found: ${name}`);
    }

    collectContent(node);
}

// Also detect literal strings passed directly to t().
walk(file, (node) => {
    if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "t"
    ) {
        const argument = node.arguments[0];

        if (argument && ts.isStringLiteralLike(argument)) {
            required.add(argument.text);
        }
    }
});

// Proper nouns and technology names intentionally stay unchanged.
const unchanged = new Set([
    "AWS",
    "SQL",
    "GitHub",
    "LinkedIn",
    "Shoory",
    "Claimsgate",
    "Union Realtime",
    "Justice Redact",
]);

const missing = [...required]
    .filter((value) => !translations.has(value))
    .filter((value) => !unchanged.has(value))
    .sort((a, b) => a.localeCompare(b));

console.log("Required strings:", required.size);
console.log("Existing translation entries:", translations.size);
console.log("Missing translations:", missing.length);

for (const [index, value] of missing.entries()) {
    console.log(`\n${index + 1}. ${value}`);
}

if (missing.length === 0) {
    console.log("\nArabic translation coverage: PASSED");
} else {
    console.log("\nArabic translation coverage: INCOMPLETE");
    if (process.argv.includes("--strict")) {
        process.exitCode = 1;
    }
}
