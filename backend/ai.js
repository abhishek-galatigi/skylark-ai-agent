const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function askAI(question, deals, workOrders) {

  const prompt = `
You are a Founder Business Intelligence Agent.

Answer ONLY from the supplied data.

If the user asks for a leadership update,
return:

# Leadership Update

## Sales

## Operations

## Risks

## Recommendations

Keep answers concise.

Question:
${question}

Deals:
${JSON.stringify(deals)}

WorkOrders:
${JSON.stringify(workOrders)}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are an experienced business analyst. Give concise, founder-friendly answers.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.1,
    max_completion_tokens: 400,
  });

  return completion.choices[0].message.content;
}

module.exports = askAI;