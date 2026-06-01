from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class ChatRequest(BaseModel):
    message: str

SYSTEM_PROMPT = (
    "You are FinWise, a financial concepts explainer. "
    "You ONLY answer questions related to finance, fintech, economics, banking, investing, credit, insurance, and related topics. "
    "If a user asks about anything outside these domains — including programming concepts, creative writing, math puzzles, or general knowledge — politely decline and redirect them. "
    "Say something like: 'I'm specialized in finance and fintech topics. Try asking me about interest rates, credit risk, blockchain, trading strategies, or any other financial concept!' "
    "For finance questions, explain clearly and simply using real-world analogies. Be accurate, concise, and educational."
)

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    if not os.getenv("OPENAI_API_KEY"):
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY not configured")

    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.message}
            ]
        )
        return {"reply": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling OpenAI API: {str(e)}")