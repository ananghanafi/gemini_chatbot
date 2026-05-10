"use client"

import {
  useEffect,
  useRef,
  useState,
} from "react"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const quickReplies = [
  "View Features",
  "Pricing",
  "Book Demo",
  "QR Check-in",
  "Contact Support",
]

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  text: string
}

export function AIChatbot() {
  const [isOpen, setIsOpen] =
    useState(false)

  const [inputValue, setInputValue] =
    useState("")

  const [isLoading, setIsLoading] =
    useState(false)

  const [messages, setMessages] =
    useState<ChatMessage[]>([
      {
        id: "welcome",
        role: "assistant",
        text: `Halo 👋

Saya Xenith AI Assistant.

Saya bisa membantu menjelaskan:
• Fitur aplikasi gym
• Pricing
• QR Check-in
• Booking demo
• Customer support

Ada yang ingin ditanyakan?`,
      },
    ])

  const messagesEndRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages])

  const handleSend = async (
    message?: string
  ) => {
    const text = message || inputValue

    if (!text.trim() || isLoading)
      return

    // USER MESSAGE
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text,
    }

    const updatedMessages = [
      ...messages,
      userMessage,
    ]

    setMessages(updatedMessages)

    setInputValue("")

    setIsLoading(true)

    try {
      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            conversation:
              updatedMessages.map(
                (msg) => ({
                  role: msg.role,
                  text: msg.text,
                })
              ),
          }),
        }
      )

      const data = await response.json()

      // ASSISTANT MESSAGE
      const assistantMessage: ChatMessage =
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text:
            data.result ||
            "Tidak ada response",
        }

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ])
    } catch (error) {
      console.error(error)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "Maaf, terjadi kesalahan server.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              setIsOpen(true)
            }
            className="fixed bottom-6 right-6 z-[9999]"
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>

              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed bottom-6 right-6 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-4rem)] rounded-2xl overflow-hidden flex flex-col border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Xenith AI Assistant
                  </h3>

                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Online
                  </p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setIsOpen(false)
                }
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex items-start gap-3 ${
                    message.role ===
                    "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      message.role ===
                      "user"
                        ? "bg-gradient-to-br from-cyan-500 to-blue-500"
                        : "bg-gradient-to-br from-purple-500 to-pink-500"
                    }`}
                  >
                    {message.role ===
                    "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl break-words ${
                      message.role ===
                      "user"
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 rounded-tr-sm"
                        : "bg-white/5 border border-white/10 rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm text-white/90 leading-relaxed whitespace-pre-wrap break-words">
                      {message.text}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing */}
              {isLoading && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>

                  <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-sm">
                    <div className="flex items-center gap-1">
                      {[0, 0.2, 0.4].map(
                        (delay) => (
                          <motion.span
                            key={delay}
                            className="w-2 h-2 rounded-full bg-white/40"
                            animate={{
                              opacity: [
                                0.4,
                                1,
                                0.4,
                              ],
                            }}
                            transition={{
                              duration: 1,
                              repeat:
                                Infinity,
                              delay,
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map(
                  (reply) => (
                    <button
                      key={reply}
                      onClick={() =>
                        handleSend(reply)
                      }
                      disabled={isLoading}
                      className="px-3 py-1.5 text-xs bg-white/5 text-white/60 rounded-full hover:bg-white/10 hover:text-white transition-colors border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {reply}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-[#0a0a0a]">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) =>
                    setInputValue(
                      e.target.value
                    )
                  }
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors disabled:opacity-50"
                />

                <Button
                  type="submit"
                  size="icon"
                  disabled={
                    !inputValue.trim() ||
                    isLoading
                  }
                  className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}