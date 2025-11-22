from fastapi import APIRouter
from app.api.v1.endpoints import search, analyze

api_router = APIRouter()

api_router.include_router(search.router, prefix="/search", tags=["search"])
api_router.include_router(analyze.router, prefix="/analyze", tags=["analyze"])
