from fastapi import FastAPI
from pydantic import BaseModel
import uuid
import redis
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


r = redis.Redis(host="redis", port=6379, db=0, decode_responses=True)

class SecretItem(BaseModel):
    secret: str

@app.post("/hide")
def hide(item: SecretItem):
    key = str(uuid.uuid4())
    r.set(key, item.secret)
    return {"key": key}

@app.get("/reveal/{key}")
def reveal(key: str):
    secret = r.get(key)
    if secret:
        r.delete(key)
        return {"secret": secret}
    return {"error": "Key not found or already used"}