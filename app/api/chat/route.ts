export const dynamic = 'force-dynamic';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Prisma ko initialize karein
const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Gemini 3 Flash use kar rahe hain jo aapki list mein tha
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const personalContext = `You are Saniya's AI Assistant. Saniya is a Full Stack Developer from Pakistan.`;
    
    const result = await model.generateContent(`${personalContext}\n\nUser: ${message}`);
    const response = await result.response;
    const text = response.text();

    // --- YE HAI DATABASE SAVING LOGIC ---
    await prisma.chatMessage.create({
      data: {
        userQuery: message,
        aiReply: text,
      },
    });

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}