import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize server-side Gemini client with recommended telemetry agent header
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Healthy probe endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "alive" });
  });

  // Generates a deep, warm and customized Film Concept & Planning Report
  app.post("/api/generate-plan", async (req, res) => {
    try {
      const {
        clientName,
        focusType,
        recipient,
        keyEvents,
        warmStories
      } = req.body;

      if (!clientName || !focusType) {
        return res.status(400).json({ error: "이름과 제작 유형을 선택해 주세요." });
      }

      if (!apiKey) {
        return res.status(500).json({
          error: "API 키가 구성되지 않았습니다. AI Studio Secrets 패널에 GEMINI_API_KEY가 등록되어 있는지 활성화 상태를 확인하세요."
        });
      }

      const prompt = `You are a respectful, thoughtful, and professional legacy family film director and writer at '레거시 필름' (Legacy Film). 
Your specialty is looking deep into family diaries, Christian faith memoirs (신앙의 고백), and parent lifetime memories, and transforming them into a premium family documentary film.

A client has submitted details for a potential video filming proposal. Please generate a highly emotional, comforting, and professional video planning report (레거시 기획안) in beautiful Korean.

Client Personal Details:
- Name: ${clientName}
- Selected Package / Service Type: ${focusType} (Options: 'MEMORY' (추억 기록 영상), 'LEGACY' (인생 기록 영상), 'FAITH STORY' (신앙 유산 영상))
- Video Story Dedicated To: ${recipient || "사랑하는 다음 세대와 권속들"}
- Crucial Milestones of Life so far: ${keyEvents || "평생 일구어 온 가치와 추억들"}
- Core Stories/Faith Confession to project in Film: ${warmStories || "담고 싶은 구체적 사연은 오프라인 상담에서 더욱 깊고 자세히 인터뷰할 예정입니다."}

Please output ONLY a valid serialized JSON object adhering EXACTLY to the following structure. It must not contain markdown notation outside the JSON keys, nor backticks. Every Korean sentence must sound refined, highly professional, warm, empathetic and nostalgic, conveying a feeling of utmost craft and prestige:

{
  "filmTitle": "A highly spiritual or artistic Korean title for this specific film concept (e.g., '기도의 자락으로 쓰인 어머니의 일기장')",
  "conceptOverview": "A beautiful, warm introductory paragraph (4-5 cohesive sentences) highlighting the conceptual centerpiece of their story and what makes it invaluable legacy.",
  "chapters": [
    {
      "chapterTitle": "Chapter 1: (E.g. 새벽을 깨우던 가쁜 숨소리 - 삶의 개척과 헌신)",
      "chapterFocus": "Detailed cinematic direction of what milestone highlights or historical segments to include in Chapter 1.",
      "interviewQuestions": [
        "A deeply emotional personalized interview question 1",
        "A customized interview question 2 focusing on their specific memories or faith testaments"
      ]
    },
    {
      "chapterTitle": "Chapter 2: (E.g. 마르지 않는 기도의 강물 - 가족과 교회의 반석이 된 삶)",
      "chapterFocus": "Detailed cinematic direction of parent struggles, faith dedication, family warmth and trials overcome.",
      "interviewQuestions": [
        "A customized deep question 3 testing the values they built for the family",
        "An emotional question 4 that prompts an direct audio-visual confession to children"
      ]
    },
    {
      "chapterTitle": "Chapter 3: (E.g. 흐르는 유산, 영원히 타오를 등불 - 다음 세대에게)",
      "chapterFocus": "How of the film will conclude with a majestic, warm climax: family reactions, prayers for grandchildren, or video letter format.",
      "interviewQuestions": [
        "A question 5 that invites elder wisdom or pastoral/faith legacy tips to grandchildren",
        "A closing blessings statement question 6"
      ]
    }
  ],
  "soundtrackAndVibe": "Symphonious audio director recommendation regarding musical chords overlay (piano, solo cello, nostalgic warm classical strings) as well as direct photo-grading color recommendations.",
  "faithChecklist": "3 points of specialized preparation tips in Korean (e.g., 성경책 지참, 자주 부르던 찬송가 음원 파일, 편지 원목 가보 준비 등) fitting the concept",
  "aiConsultantMessage": "A heartfelt warm letter from the Director of Legacy Film to the client, praising their precious dedication of making their parent/life stories recorded forever."
}

Generate strictly in Korean. Make sure it is valid JSON syntax.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              filmTitle: { type: Type.STRING },
              conceptOverview: { type: Type.STRING },
              chapters: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    chapterTitle: { type: Type.STRING },
                    chapterFocus: { type: Type.STRING },
                    interviewQuestions: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    }
                  },
                  required: ["chapterTitle", "chapterFocus", "interviewQuestions"]
                }
              },
              soundtrackAndVibe: { type: Type.STRING },
              faithChecklist: { type: Type.STRING },
              aiConsultantMessage: { type: Type.STRING }
            },
            required: ["filmTitle", "conceptOverview", "chapters", "soundtrackAndVibe", "faithChecklist", "aiConsultantMessage"]
          }
        }
      });

      const rawText = response.text || "{}";
      const planData = JSON.parse(rawText.trim());
      res.json({ success: true, plan: planData });

    } catch (error: any) {
      console.error("Error during legacy film plan generation:", error);
      res.status(500).json({ error: error?.message || "기획안 생성과정 중 오류가 발생했습니다." });
    }
  });

  // Vite development middleware vs Static Production bundle server configuration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at custom unified platform standard port: http://0.0.0.0:${PORT}`);
  });
}

startServer();
