from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str
    DEBUG: bool = False
    API_V1_PREFIX: str = "/api/v1"

    # Amazon API
    AMAZON_ACCESS_KEY: str
    AMAZON_SECRET_KEY: str
    AMAZON_PARTNER_TAG: str
    AMAZON_MARKETPLACE: str = "IN"

    # ML
    SENTIMENT_MODEL: str = "distilbert-base-uncased"
    MAX_REVIEWS_PER_PRODUCT: int = 50

    ALLOWED_ORIGINS: List[str] = []

    class Config:
        env_file = ".env"

settings = Settings()
