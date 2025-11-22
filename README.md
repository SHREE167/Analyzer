# Amazon Product Analyzer

## Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```

3. Run the backend:
   ```bash
   cd backend
   uvicorn app.main:app --reload
   ```
