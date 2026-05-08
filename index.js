import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();

const PORT = process.env.PORT || 3000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const GEMINI_MODEL = "gemini-2.5-flash-lite";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Start server
app.listen(PORT, () => {
  console.log(`Server Ready ${PORT}`);
});

// Route
app.post("/api/chat", async (req, res) => {
  try {
    const { conversation } = req.body;

    console.log(conversation);

    if (!Array.isArray(conversation)) {
      throw new Error("Conversation harus array");
    }

    const contents = conversation.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents,
      config: {
        temperature: 0.9,
        systemInstruction: "Jawab hanya menggunakan bahasa Indonesia",
      },
    });

    res.status(200).json({
      result: response.text,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});