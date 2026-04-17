"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { askCv } from "../lib/askCv";

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
  };

  return labels[source] || source.replace(".md", "");
}

function uniqueSourceLabels(sources: SourceChunk[]) {
  return [...new Set(sources.map((s) => formatSourceLabel(s.source)))];
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
          background: isUser ? "#111111" : "#f5f5f5",
          color: isUser ? "#ffffff" : "#111111",
          border: isUser ? "1px solid #111111" : "1px solid #e7e7e7",
          boxShadow: isUser
            ? "0 6px 20px rgba(0,0,0,0.12)"
            : "0 6px 20px rgba(0,0,0,0.05)",
          whiteSpace: "pre-wrap",
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
            background: "#999999",
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

export default function AskCv() {
  const starterPrompts = useMemo(
    () => [
      "What is Justice Redact?",
      "What AI experience does Hothyfa have?",
      "Has he used Python in production?",
      "Does he have AWS certifications?",
    ],
    []
  );

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Ask about my experience, projects, certifications, or technical background. I’ll answer using my portfolio and CV content only.",
      sources: [],
    },
  ]);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

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
      animateAssistantMessage(res.answer, res.sources || []);
    } catch (error) {
      console.error(error);
      animateAssistantMessage(
        "Something went wrong while contacting the CV assistant. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "920px",
        margin: "48px auto",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          border: "1px solid #e8e8e8",
          borderRadius: "28px",
          overflow: "hidden",
          background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
          boxShadow: "0 18px 50px rgba(0, 0, 0, 0.07)",
        }}
      >
        <div
          style={{
            padding: "24px 24px 18px",
            borderBottom: "1px solid #efefef",
            background: "rgba(255,255,255,0.9)",
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
                background: "#111111",
              }}
            />
            <h2
              style={{
                margin: 0,
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#111111",
              }}
            >
              Ask My CV
            </h2>
          </div>

          <p
            style={{
              margin: 0,
              color: "#666666",
              lineHeight: 1.6,
              fontSize: "0.95rem",
              maxWidth: "720px",
            }}
          >
            An AI-powered assistant that answers questions about my experience,
            projects, certifications, and technical background using only my
            portfolio and CV content.
          </p>
        </div>

        <div
          ref={scrollRef}
          style={{
            height: "440px",
            overflowY: "auto",
            padding: "22px 20px 10px",
            background:
              "radial-gradient(circle at top, rgba(0,0,0,0.02), transparent 35%), #fcfcfc",
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
                    msg.content
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
                            background: "#f1f1f1",
                            border: "1px solid #e5e5e5",
                            color: "#555555",
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
            borderTop: "1px solid #efefef",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSubmit(prompt)}
                disabled={loading}
                style={{
                  padding: "8px 12px",
                  borderRadius: "999px",
                  border: "1px solid #e2e2e2",
                  background: "#fafafa",
                  color: "#222222",
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

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "12px",
              padding: "10px",
              border: "1px solid #e5e5e5",
              borderRadius: "22px",
              background: "#fafafa",
            }}
          >
            <textarea
              placeholder="Ask about my experience, projects, skills, or certifications..."
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
                color: "#111111",
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
                  loading || !message.trim() ? "#d9d9d9" : "#111111",
                color: "#ffffff",
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
    </section>
  );
}