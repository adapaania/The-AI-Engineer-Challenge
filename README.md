# 👋 Welcome to the AI Engineer Challenge

## 🤖 FinWise — Financial Concepts Explainer

A domain-scoped LLM app that explains finance and fintech concepts in simple language.

**Live App:** https://finwise-eight.vercel.app  
**GitHub:** https://github.com/adapaania/The-AI-Engineer-Challenge

---

## 🧪 Vibe Check

## 🏗️ Activity #1: General Capability Vibe Check

**1. Prompt:** Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:** Domain boundary enforcement  
**Response:** I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!

---

**2. Prompt:** Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:** Summarization — out of scope without financial content  
**Response:** I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept! If you share a paragraph related to finance or economics, I'd be happy to help summarize it.

---

**3. Prompt:** Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:** Creative writing — out of scope  
**Response:** I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!

---

**4. Prompt:** If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:** Math reasoning — out of scope  
**Response:** I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!

---

**5. Prompt:** Rewrite the following paragraph in a professional, formal tone…  
**Aspect Tested:** Text transformation — out of scope  
**Response:** I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Answer:** Yes. FinWise is intentionally domain-scoped. All five out-of-domain prompts were correctly refused and redirected. This is a deliberate design decision — a focused assistant is more reliable than one that drifts outside its purpose.

---

## 🏗️ Activity #2: Personal Use Vibe Check

**Prompt:** What is credit risk and how do banks measure it?  
**Result:** Accurate, detailed explanation covering FICO scores, PD, LGD, EAD, and the Expected Loss formula (EL = PD × LGD × EAD). Used a car mechanic analogy to make it concrete.

---

**Prompt:** What is quantitative easing?  
**Result:** Clear explanation of QE as a monetary policy tool — central bank creates money to buy assets, lowering rates and encouraging lending. Used a "car stuck in mud" analogy. Well-structured and accurate.

---

**Prompt:** How does blockchain work in simple terms?  
**Result:** Correctly identified as a fintech topic. Explained blockchain as a shared digital ledger with cryptographically linked blocks, connected to financial use cases like Bitcoin and fraud reduction.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations?

**Answer:** Yes. FinWise stays within its domain, explains concepts clearly with analogies, and handles edge cases like blockchain thoughtfully. Tone is educational and accessible.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

**Prompt:** What is the current price of Apple stock?  
**Result:** No real-time data access. Can explain how stock prices work but cannot retrieve live figures.

---

**Prompt:** What did we talk about in our last conversation?  
**Result:** No memory across sessions. Each conversation starts fresh.

---

### ❓Question #3

What are some limitations?

**Answer:** No real-time data, no conversation memory, and domain enforcement is prompt-based rather than classifier-based.

---

## 🚀 Improvements Made

**Adjustments:** Tightened system prompt to refuse out-of-domain questions. Changed model from `gpt-5` to `gpt-4.1-mini`.  
**Results:** All out-of-domain prompts correctly refused. Finance prompts returned accurate, well-structured responses.

---

## 📦 Submission

- **GitHub:** https://github.com/adapaania/The-AI-Engineer-Challenge
- **Live App:** https://finwise-eight.vercel.app

---

🚀 Built and shipped with FastAPI, Next.js, OpenAI API, and Vercel. #FirstLLMApp
