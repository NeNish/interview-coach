const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { prompt, systemPrompt } = req.body;

    if (!prompt) return res.status(400).json({ error: "Missing prompt" });

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt || "You are a helpful assistant.",
      messages: [{ role: "user", content: prompt }],
    });

    return res.status(200).json({ text: message.content?.[0]?.text || "" });
  } catch (err) {
    console.error("Anthropic API error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
};
