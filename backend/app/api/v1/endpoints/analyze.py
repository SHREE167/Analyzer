from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def analyze_product():
    return {"message": "Analyze endpoint"}
