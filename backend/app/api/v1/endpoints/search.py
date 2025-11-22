from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def search_products():
    return {"message": "Search endpoint"}
