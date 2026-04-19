"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { askCv } from "../lib/askCv";
import { useLanguage } from "./language/LanguageProvider";

type SourceChunk = {
  source: string;
  text: string;
};

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: SourceChunk[];
  isTyping?: boolean;
};

function formatSourceLabel(source: string) {
  const labels: Record<string, string> = {
    "profile.md": "Profile",
    "experience.md": "Experience",
    "certifications.md": "Certifications",
    "projects.md": "Projects",
    "facts.md": "Facts",
    "general.md": "General",
  };

  return labels[source] || source.replace(".md", "");
}

function uniqueSourceLabels(sources: SourceChunk[]) {
  return [...new Set(sources.map((s) => formatSourceLabel(s.source)))];
}

function normalizeMarkdown(content: string) {
  return content
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function Bubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
}) {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "14px",
      }}
    >
      <div
        style={{
          maxWidth: "85%",
          padding: "14px 16px",
          borderRadius: "18px",
          background: isUser
            ? "var(--cv-user-bubble-bg)"
            : "var(--cv-assistant-bubble-bg)",
          color: isUser
            ? "var(--cv-user-bubble-text)"
            : "var(--cv-assistant-bubble-text)",
          border: isUser
            ? "1px solid var(--cv-user-bubble-border)"
            : "1px solid var(--cv-assistant-bubble-border)",
          boxShadow: isUser
            ? "var(--cv-user-shadow)"
            : "var(--cv-assistant-shadow)",
          lineHeight: 1.6,
          fontSize: "0.95rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        minHeight: "22px",
      }}
      aria-label="Assistant is thinking"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "999px",
            background: "var(--cv-typing-dot)",
            display: "inline-block",
            animation: `pulse 1.2s ${i * 0.15}s infinite ease-in-out`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes pulse {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.45;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

function MarkdownMessage({
  content,
  isUser,
}: {
  content: string;
  isUser: boolean;
}) {
  const textColor = isUser
    ? "var(--cv-user-bubble-text)"
    : "var(--cv-assistant-bubble-text)";
  const mutedColor = isUser
    ? "var(--cv-blockquote-muted-user)"
    : "var(--cv-blockquote-muted-assistant)";
  const borderColor = "var(--cv-border)";
  const normalizedContent = normalizeMarkdown(content);

  return (
    <div style={{ color: textColor }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1
              style={{
                fontSize: "1.12rem",
                fontWeight: 700,
                margin: "0 0 8px",
                lineHeight: 1.35,
              }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              style={{
                fontSize: "1.04rem",
                fontWeight: 700,
                margin: "0 0 8px",
                lineHeight: 1.35,
              }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              style={{
                fontSize: "0.98rem",
                fontWeight: 700,
                margin: "0 0 6px",
                lineHeight: 1.35,
              }}
            >
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p style={{ margin: "0 0 6px", lineHeight: 1.65 }}>{children}</p>
          ),
          ul: ({ children }) => (
            <ul style={{ margin: "4px 0 8px 18px", padding: 0 }}>{children}</ul>
          ),
          ol: ({ children }) => (
            <ol style={{ margin: "4px 0 8px 18px", padding: 0 }}>{children}</ol>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: "4px", lineHeight: 1.55 }}>{children}</li>
          ),
          strong: ({ children }) => (
            <strong style={{ fontWeight: 700 }}>{children}</strong>
          ),
          em: ({ children }) => <em>{children}</em>,
          code: ({ children }) => (
            <code
              style={{
                fontSize: "0.88em",
                padding: "2px 6px",
                borderRadius: "6px",
                background: isUser
                  ? "var(--cv-code-bg-user)"
                  : "var(--cv-code-bg-assistant)",
                border: `1px solid ${borderColor}`,
              }}
            >
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <blockquote
              style={{
                margin: "4px 0 8px",
                paddingLeft: "12px",
                borderLeft: `3px solid ${borderColor}`,
                color: mutedColor,
              }}
            >
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: isUser ? "var(--cv-link-user)" : "var(--cv-link-assistant)",
                textDecoration: "underline",
              }}
            >
              {children}
            </a>
          ),
        }}
      >
        {normalizedContent}
      </ReactMarkdown>
    </div>
  );
}

export default function AskCv() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const starterPrompts = useMemo(
    () =>
      isArabic
        ? [
            "مرحبا",
            "من أنت؟",
            "كيف يمكنك مساعدتي؟",
            "من هو هذيفة البعيرة؟",
            "ما هو مشروع Justice Redact؟",
            "ما خبرة هذيفة في الذكاء الاصطناعي؟",
            "هل استخدم Python في بيئات الإنتاج؟",
            "هل لديه شهادات AWS؟",
          ]
        : [
            "Hi",
            "Who are you?",
            "How can you help me?",
            "Who is Hothyfa Elbeera?",
            "What is Justice Redact?",
            "What AI experience does Hothyfa have?",
            "Has he used Python in production?",
            "Does he have AWS certifications?",
          ],
    [isArabic]
  );

  const welcomeMessage = isArabic
    ? "اسأل عن خبرتي، مشاريعي، شهاداتي، أو خلفيتي التقنية. سأجيب باستخدام محتوى سيرتي الذاتية ومحفظتي فقط."
    : "Ask about my experience, projects, certifications, or technical background. I’ll answer using my portfolio and CV content only.";

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: welcomeMessage,
      sources: [],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [usedStarterPrompts, setUsedStarterPrompts] = useState<Set<string>>(
    () => new Set()
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const availableStarterPrompts = useMemo(
    () => starterPrompts.filter((prompt) => !usedStarterPrompts.has(prompt)),
    [starterPrompts, usedStarterPrompts]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: welcomeMessage,
        sources: [],
      },
    ]);
    setUsedStarterPrompts(new Set());
    setMessage("");
  }, [welcomeMessage]);

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  const animateAssistantMessage = (
    fullText: string,
    sources: SourceChunk[] = []
  ) => {
    const assistantId = crypto.randomUUID();

    setMessages((prev) => [
      ...prev,
      {
        id: assistantId,
        role: "assistant",
        content: "",
        sources: [],
        isTyping: true,
      },
    ]);

    let index = 0;

    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);

    typingIntervalRef.current = setInterval(() => {
      index += 1;

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content: fullText.slice(0, index),
                isTyping: index < fullText.length,
                sources: index >= fullText.length ? sources : [],
              }
            : msg
        )
      );

      if (index >= fullText.length && typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    }, 12);
  };

  const handleSubmit = async (preset?: string) => {
    const outgoing = (preset ?? message).trim();
    if (!outgoing || loading) return;

    setLoading(true);
    setMessage("");

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: outgoing,
      },
    ]);

    try {
      const res = await askCv(outgoing);
      console.log("RAW ANSWER:", JSON.stringify(res.answer));
      animateAssistantMessage(res.answer, res.sources || []);
    } catch (error) {
      console.error(error);
      animateAssistantMessage(
        isArabic
          ? "حدث خطأ أثناء التواصل مع مساعد السيرة الذاتية. يرجى المحاولة مرة أخرى."
          : "Something went wrong while contacting the CV assistant. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleStarterPromptClick = (prompt: string) => {
    if (loading) return;
    setUsedStarterPrompts((prev) => {
      const next = new Set(prev);
      next.add(prompt);
      return next;
    });
    void handleSubmit(prompt);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "920px",
        margin: "0 auto",
        padding: 0,
      }}
    >
      <div
        style={{
          border: "1px solid var(--cv-panel-border)",
          borderRadius: "28px",
          overflow: "hidden",
          background: "var(--cv-panel-gradient)",
          boxShadow: "0 18px 50px rgba(0, 0, 0, 0.07)",
        }}
      >
        <div
          style={{
            padding: "24px 24px 18px",
            borderBottom: "1px solid var(--cv-divider)",
            background: "var(--cv-header-bg)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "999px",
                background: "var(--cv-ink)",
              }}
            />
            <h2
              style={{
                margin: 0,
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "var(--cv-ink)",
              }}
            >
              {isArabic ? "اسأل عن سيرتي الذاتية" : "Ask My CV"}
            </h2>
          </div>

          <p
            style={{
              margin: 0,
              color: "var(--cv-muted)",
              lineHeight: 1.6,
              fontSize: "0.95rem",
              maxWidth: "720px",
            }}
          >
            {isArabic
              ? "مساعد مدعوم بالذكاء الاصطناعي يجيب عن الأسئلة المتعلقة بخبرتي ومشاريعي وشهاداتي وخلفيتي التقنية بالاعتماد فقط على محتوى السيرة الذاتية ومحفظة الأعمال."
              : "An AI-powered assistant that answers questions about my experience, projects, certifications, and technical background using only my portfolio and CV content."}
          </p>
        </div>

        <div
          ref={scrollRef}
          style={{
            height: "440px",
            overflowY: "auto",
            padding: "22px 20px 10px",
            background: "var(--cv-chat-bg)",
          }}
        >
          {messages.map((msg) => {
            const sourceLabels =
              msg.sources && msg.sources.length > 0
                ? uniqueSourceLabels(msg.sources)
                : [];

            return (
              <div key={msg.id}>
                <Bubble role={msg.role}>
                  {msg.role === "assistant" && msg.isTyping && !msg.content ? (
                    <TypingDots />
                  ) : (
                    <MarkdownMessage
                      content={msg.content}
                      isUser={msg.role === "user"}
                    />
                  )}
                </Bubble>

                {msg.role === "assistant" && sourceLabels.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginTop: "-4px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "4px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      {sourceLabels.map((label) => (
                        <span
                          key={label}
                          style={{
                            padding: "6px 10px",
                            borderRadius: "999px",
                            background: "var(--cv-chip-bg)",
                            border: "1px solid var(--cv-chip-border)",
                            color: "var(--cv-chip-text)",
                            fontSize: "0.78rem",
                            fontWeight: 500,
                          }}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            padding: "16px 20px 18px",
            borderTop: "1px solid var(--cv-divider)",
            background: "var(--cv-ink-contrast)",
          }}
        >
          {availableStarterPrompts.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "14px",
              }}
            >
              {availableStarterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleStarterPromptClick(prompt)}
                  disabled={loading}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "999px",
                    border: "1px solid var(--cv-suggest-border)",
                    background: "var(--cv-suggest-bg)",
                    color: "var(--cv-suggest-text)",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontSize: "0.85rem",
                    transition: "all 0.2s ease",
                    opacity: loading ? 0.6 : 1,
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "12px",
              padding: "10px",
              border: "1px solid var(--cv-input-wrap-border)",
              borderRadius: "22px",
              background: "var(--cv-input-wrap-bg)",
            }}
          >
            <textarea
              placeholder={
                isArabic
                  ? "اسأل عن خبرتي أو مشاريعي أو مهاراتي أو شهاداتي..."
                  : "Ask about my experience, projects, skills, or certifications..."
              }
              value={message}
              disabled={loading}
              rows={1}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              style={{
                flex: 1,
                resize: "none",
                border: "none",
                outline: "none",
                background: "transparent",
                color: "var(--cv-input-text)",
                fontSize: "0.95rem",
                lineHeight: 1.5,
                minHeight: "24px",
                maxHeight: "140px",
                fontFamily: "inherit",
                padding: "8px 10px",
              }}
            />

            <button
              type="button"
              onClick={() => handleSubmit()}
              disabled={loading || !message.trim()}
              aria-label="Send message"
              style={{
                minWidth: "44px",
                height: "44px",
                borderRadius: "999px",
                border: "none",
                background:
                  loading || !message.trim()
                    ? "var(--cv-send-disabled-bg)"
                    : "var(--cv-send-enabled-bg)",
                color: "var(--cv-send-text)",
                cursor:
                  loading || !message.trim() ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                fontWeight: 700,
                transition: "all 0.2s ease",
                boxShadow:
                  loading || !message.trim()
                    ? "none"
                    : "0 8px 24px rgba(0,0,0,0.18)",
              }}
            >
              {loading ? "…" : "↑"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}