content = open("App.js").read()

old = '''async function callClaude(prompt, systemPrompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  return data.content?.[0]?.text || "";
}'''

new = '''async function callClaude(prompt, systemPrompt) {
  const res = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, systemPrompt }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.text || "";
}'''

content = content.replace(old, new)
open("App.js", "w").write(content)
print("Patched OK" if "/api/analyze" in content else "PATCH FAILED")
