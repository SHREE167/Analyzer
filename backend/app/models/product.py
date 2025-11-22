from pydantic import BaseModel
from typing import List, Optional

class Review(BaseModel):
    text: str
    rating: float
    date: Optional[str]
    sentiment_score: Optional[float]

class Product(BaseModel):
    asin: str
    title: str
    price: Optional[float]
    rating: float
    review_count: int
    image_url: Optional[str]
    reviews: List[Review] = []

class RankedProduct(Product):
    ai_score: float
    rank: int
    sentiment_summary: dict
