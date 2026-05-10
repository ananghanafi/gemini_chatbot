import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
})

const GEMINI_MODEL = "gemini-2.5-flash-lite"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { conversation } = body

    if (!Array.isArray(conversation)) {
      return Response.json(
        {
          message: "Conversation harus array",
        },
        {
          status: 400,
        }
      )
    }

    const contents = conversation.map(
      ({
        role,
        text,
      }: {
        role: string
        text: string
      }) => ({
        role: role === "assistant" ? "model" : "user",
        parts: [{ text }],
      })
    )

    const response =
      await ai.models.generateContent({
        model: GEMINI_MODEL,

        contents,

        config: {
          temperature: 0.9,

          systemInstruction: `
Kamu adalah Xenith AI Assistant.

Rules:
- Jawab hanya menggunakan bahasa Indonesia
- Ramah dan profesional
- Fokus membantu customer gym
- Jelaskan fitur dengan jelas
          `,
        },
      })

    return Response.json({
      result: response.text,
    })
  } catch (error: any) {
    console.error(error)

    return Response.json(
      {
        message:
          error.message ||
          "Terjadi kesalahan server",
      },
      {
        status: 500,
      }
    )
  }
}