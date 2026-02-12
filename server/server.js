// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({
//   apiKey: process.env.GROQ_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
// });

// app.post("/enhance-story", async (req, res) => {
//   try {
//     const { story, tone } = req.body;

//     if (!story) {
//       return res.status(400).json({ error: "Story is required." });
//     }

//     const prompt = `
// Rewrite this story in a ${tone} tone.
// Make it vivid, emotionally rich, and immersive.

// Story:
// ${story}
// `;

//     const completion = await openai.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       stream: true,
//       messages: [
//         { role: "system", content: "You are a creative writing assistant." },
//         { role: "user", content: prompt },
//       ],
//     });

//     res.setHeader("Content-Type", "text/plain; charset=utf-8");
//     res.setHeader("Transfer-Encoding", "chunked");

//     for await (const chunk of completion) {
//       const content = chunk.choices[0]?.delta?.content;
//       if (content) {
//         res.write(content);
//       }
//     }

//     res.end();

//   } catch (error) {
//     console.error("Backend Error:", error);
//     res.status(500).send("Error generating story");
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });























process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

app.post("/enhance-story", async (req, res) => {
  try {
    const { story, tone, language } = req.body;

    if (!story) {
      return res.status(400).json({ error: "Story is required." });
    }

    let languageInstruction = "";

    switch (language) {
      case "hindi":
        languageInstruction =
          "Rewrite the story in professional and expressive Hindi.";
        break;

      case "hinglish":
        languageInstruction =
          "Rewrite the story in Hinglish (Hindi written using English letters).";
        break;

      case "auto":
        languageInstruction =
          "Detect the language of the story and rewrite it in the same language, improving quality and depth.";
        break;

      default:
        languageInstruction =
          "Rewrite the story in professional and polished English.";
    }

    const prompt = `
Rewrite this story in a ${tone} tone.
Make it vivid, emotionally rich, and immersive.

${languageInstruction}

Story:
${story}
`;

    const completion = await openai.chat.completions.create({
      model: "llama-3.1-8b-instant",
      stream: true,
      messages: [
        { role: "system", content: "You are a creative writing assistant." },
        { role: "user", content: prompt },
      ],
    });

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");

    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        res.write(content);
      }
    }

    res.end();

  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).send("Error generating story");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
