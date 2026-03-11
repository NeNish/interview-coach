# 🎙️ AI Interview Coach

A full-stack AI-powered video interview practice app — React + Vercel Serverless + Claude API.

---

## 🚀 Deploy to Vercel (3 Steps)

### Step 1 — Get your Anthropic API Key
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. **API Keys → Create Key** → copy the key (starts with `sk-ant-...`)

### Step 2 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/interview-coach.git
git branch -M main
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → log in with GitHub
2. **Add New Project** → import your repo
3. Before deploying → **Environment Variables** → add:
   - Name: `ANTHROPIC_API_KEY`  |  Value: `sk-ant-...`
4. Click **Deploy** — live in ~2 minutes! 🎉

---

## 💻 Run Locally

```bash
npm install
npm install -g vercel
echo "ANTHROPIC_API_KEY=sk-ant-your-key" > .env
vercel dev        # runs at http://localhost:3000
```

---

## 📁 Structure

```
interview-coach/
├── api/
│   └── analyze.js     ← Serverless function (secure Claude API proxy)
├── src/
│   └── App.js         ← Full React app
├── vercel.json        ← Deployment config
└── .env.example       ← Copy → .env, add your key
```

## 🔒 Security
Your API key lives only in Vercel's environment variables — never in the browser.
