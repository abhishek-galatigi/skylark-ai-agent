# Skylark Business Intelligence Agent

## Overview

The Skylark Business Intelligence Agent is an AI-powered web application that helps founders and executives query business data stored in Monday.com boards using natural language.

The application dynamically reads data from Monday.com, cleans inconsistent records, and uses Groq Llama 3.3 to generate business insights, leadership updates, and operational recommendations.

---

## Features

- Monday.com GraphQL API Integration
- Dynamic data retrieval (No hardcoded CSV data)
- AI-powered business intelligence
- Leadership update generation
- Pipeline analysis
- Work order analysis
- Revenue and sector insights
- Graceful handling of missing data
- Conversational chat interface

---

## Tech Stack

Frontend
- React
- Vite
- CSS

Backend
- Node.js
- Express.js
- Axios

AI
- Groq API (Llama 3.3)

External APIs
- Monday.com GraphQL API

Deployment
- Frontend: Vercel
- Backend: Render

---

## Project Structure

```
skylark-ai-agent/

├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── ai.js
│   ├── monday.js
│   ├── cleanData.js
│   └── package.json
│
├── README.md
└── DecisionLog.md
```

---

## Architecture

User
↓

React Frontend

↓

Express Backend

↓

Monday.com GraphQL API

↓

Data Cleaning

↓

Groq Llama 3.3

↓

Business Insights

---

## Environment Variables

Backend requires:

```
MONDAY_API_TOKEN=YOUR_TOKEN
GROQ_API_KEY=YOUR_GROQ_KEY
```

---

## Local Setup

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Deployment

Backend

Render

Frontend

Vercel

---

## Sample Questions

- How is our Mining pipeline?
- Generate a leadership update
- Which sector has the highest pipeline?
- Show delayed work orders
- Give me a revenue summary
- Which deals require immediate attention?

---

## Future Improvements

- Authentication
- Charts & Analytics
- Role-based access
- Advanced filtering
- Conversation memory
- Dashboard visualizations

---

## Author

Abhishek Galatigi