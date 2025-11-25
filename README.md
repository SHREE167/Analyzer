# Amazon Product Analyzer

A full-stack application to analyze Amazon products using NLP and sentiment analysis.

## Prerequisites

*   Python 3.10+
*   Node.js (optional, for serving frontend) or any simple HTTP server
*   An Amazon Product Advertising API account (for live data)

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd amazon-product-analyzer
```

### 2. Backend Setup

1.  **Create and activate a virtual environment:**

    ```bash
    python3 -m venv venv

    # Linux/Mac
    source venv/bin/activate

    # Windows
    .\venv\Scripts\activate
    ```

2.  **Install Python dependencies:**

    ```bash
    pip install -r backend/requirements.txt
    ```

3.  **Environment Variables:**

    The `backend/.env` file is pre-configured with placeholders. You need to update it with your real API keys if you want to fetch live data from Amazon.

    ```ini
    AMAZON_ACCESS_KEY=your_access_key
    AMAZON_SECRET_KEY=your_secret_key
    AMAZON_PARTNER_TAG=your_partner_tag
    ```

4.  **Run the Backend Server:**

    ```bash
    cd backend
    uvicorn app.main:app --reload --port 8000
    ```

    The API will be available at `http://localhost:8000`.
    API Documentation (Swagger UI) is available at `http://localhost:8000/docs`.

### 3. Frontend Setup

The frontend is a static site using Tailwind CSS (via CDN) and vanilla JavaScript. You can serve it using any static file server.

**Option A: Python's built-in HTTP server**

Open a new terminal window:

```bash
cd frontend
python3 -m http.server 3000
```

Open your browser and navigate to `http://localhost:3000`.

**Option B: VS Code Live Server**

If you use VS Code, you can install the "Live Server" extension, right-click `frontend/index.html`, and select "Open with Live Server".

## Project Structure

```
amazon-product-analyzer/
├── backend/            # FastAPI backend
│   ├── app/
│   │   ├── api/        # API endpoints
│   │   ├── core/       # Core logic (Amazon API, NLP)
│   │   ├── models/     # Pydantic models
│   │   └── services/   # Business logic (Scraper, Ranker)
│   └── requirements.txt
├── frontend/           # Static frontend
│   ├── index.html
│   ├── style.css
│   └── app.js
├── data/               # Data storage (CSV, etc.)
└── notebooks/          # Jupyter notebooks for testing
```
