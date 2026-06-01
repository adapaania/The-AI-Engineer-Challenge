# 👋 Welcome to the AI Engineer Challenge

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge/blob/main/docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!
2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

🏗️ Forking & Cloning This Repository

Before you begin, make sure you have:

1. 👤 A GitHub account
2. 🔧 Git installed on your local machine
3. 💻 Cursor (AI-powered code editor)
4. ⌨️ Terminal access (Mac/Linux)
5. 🔑 A GitHub Personal Access Token

⚙️ Backend Setup with uv

1. Install `uv`: `pip install uv`
2. Install dependencies: `uv sync`
3. Set OpenAI key: `export OPENAI_API_KEY=sk-...`
4. Start backend: `uv run uvicorn api.index:app --reload`

🔥 Setting Up for Vibe Coding Success

- Used Cursor with Next.js and Vercel docs indexed
- Vibe-coded the frontend using Cursor's AI chat
- Integrated frontend with the provided FastAPI backend

😎 App: FinWise — Financial Concepts Explainer

FinWise is a domain-scoped LLM assistant that explains finance and fintech concepts in simple, clear language. It uses `gpt-4.1-mini` with a custom system prompt that restricts responses strictly to finance, economics, banking, investing, credit, and related topics.

**Live App:** [https://finwise-eight.vercel.app](https://finwise-eight.vercel.app)

🚀 Deploying Your First LLM-powered Application with Vercel

1. `npm install -g vercel`
2. `cd frontend && npx vercel --prod`
3. Added `OPENAI_API_KEY` via `npx vercel env add OPENAI_API_KEY`

---

## 🧪 Vibe Check Your LLM App

## 🏗️ Activity #1: General Capability Vibe Check

---

**1. Prompt:**
Explain the concept of object-oriented programming in simple terms to a complete beginner.

**Aspect Tested:** Domain boundary enforcement — out-of-scope general programming question.

**Response:**
I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!

---

**2. Prompt:**
Read the following paragraph and provide a concise summary of the key points…

**Aspect Tested:** Summarization ability — out-of-scope without a finance-related paragraph provided.

**Response:**
I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept! If you share a paragraph related to finance or economics, I'd be happy to help summarize it.

---

**3. Prompt:**
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.

**Aspect Tested:** Creative writing — out-of-scope domain request.

**Response:**
I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!

---

**4. Prompt:**
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?

**Aspect Tested:** Mathematical reasoning — out-of-scope general math question.

**Response:**
I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!

---

**5. Prompt:**
Rewrite the following paragraph in a professional, formal tone…

**Aspect Tested:** Text transformation — out-of-scope without finance-related content.

**Response:**
I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**
Yes — by design. FinWise is intentionally domain-scoped to finance and fintech. All five out-of-domain prompts were correctly identified and redirected with a clear, helpful message. This is a deliberate product decision: a focused assistant is more reliable and trustworthy than a general-purpose one that occasionally drifts. The redirect message guides users toward the app's actual capabilities.

---

## 🏗️ Activity #2: Personal Use Vibe Check

---

**Prompt:** What is credit risk and how do banks measure it?

**Result:**
Credit risk is the possibility that a borrower will fail to repay a loan, causing a loss to the lender. FinWise explained how banks measure it using Credit Scoring (e.g. FICO scores), Probability of Default (PD), Loss Given Default (LGD), Exposure at Default (EAD), and stress testing — combining them into the Expected Loss formula: EL = PD × LGD × EAD. Used a car mechanic analogy to make the concept concrete. Response was accurate, detailed, and easy to follow.

---

**Prompt:** What is quantitative easing?

**Result:**
FinWise explained QE as a monetary policy tool where a central bank creates money electronically to buy financial assets, increasing the money supply, lowering interest rates, and encouraging lending and investment. It used a "car stuck in mud" analogy to make the mechanism intuitive. The response was well-structured and accurate.

---

**Prompt:** How does blockchain work in simple terms?

**Result:**
FinWise correctly recognized blockchain as a fintech topic despite it being technology-adjacent. It explained blockchain as a shared digital ledger across many computers where transactions are grouped into cryptographically linked blocks, directly connecting the concept to financial use cases like Bitcoin and fraud reduction in banking. The response was clear and appropriately finance-focused.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**
Yes. FinWise behaves exactly as designed. It stays firmly within the finance and fintech domain, gives structured explanations with real-world analogies, and handles edge cases thoughtfully — for example, recognizing blockchain as a valid fintech topic despite being technology-adjacent. The tone is educational without being condescending, which matches the intended audience: students and professionals learning financial concepts for the first time.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

---

**Prompt:** What is the current price of Apple stock?

**Result:**
FinWise has no access to real-time market data. It can explain how stock prices work and what drives them, but cannot retrieve live prices, exchange rates, or current market data.

---

**Prompt:** What did we talk about in our last conversation?

**Result:**
FinWise has no memory across sessions. Each conversation starts completely fresh with no context from previous interactions.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**
Three clear limitations exist. First, no real-time data access — FinWise cannot retrieve live stock prices, interest rates, or breaking financial news. Second, no conversation memory — the app is stateless, so it cannot reference prior exchanges or build context across sessions. Third, prompt-based domain enforcement — the domain restriction lives in the system prompt rather than a classifier layer, meaning a determined user could potentially rephrase out-of-scope questions to extract non-financial answers.

---

## 🚀 Improvements Made

**Adjustments Made:**
After the initial vibe check revealed the assistant answered out-of-domain questions freely (OOP explanations, creative writing, math puzzles), the system prompt was tightened to explicitly restrict FinWise to finance and fintech topics only, with a clear redirect message for out-of-scope queries. The model was also changed from `gpt-5` (which caused API errors) to `gpt-4.1-mini`.

**Results:**
All five out-of-domain prompts in Activity 1 were correctly refused and redirected. Finance-specific prompts in Activity 2 returned accurate, well-structured, analogy-driven explanations. Domain consistency improved significantly across all test cases.

---

## 📦 Submission

- **GitHub Repo:** [https://github.com/adapaania/The-AI-Engineer-Challenge](https://github.com/YOUR_GITHUB_USERNAME/The-AI-Engineer-Challenge)
- **Live App:** [https://finwise-eight.vercel.app](https://finwise-eight.vercel.app)

---

## 🎉 Congratulations!

🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM-powered application — FinWise, a financial concepts explainer built with FastAPI, Next.js, and the OpenAI API! 🖥️

Check it out 👇
[https://finwise-eight.vercel.app](https://finwise-eight.vercel.app)

A big shoutout to the @AI Makerspace for making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp