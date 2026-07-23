# Decision Log

## Project Overview

The objective of this project was to build an AI-powered Business Intelligence Agent capable of answering founder-level business questions by integrating with Monday.com boards.

---

# Assumptions

- Monday.com contains the latest business data.
- Missing values should not break the application.
- Unknown values are displayed as "Unknown".
- Founders prefer summarized insights instead of raw database records.
- The application has read-only access to Monday.com.

---

# Key Design Decisions

## Monday.com API

I chose the Monday.com GraphQL API because it provides dynamic access to live board data without relying on hardcoded CSV files.

---

## AI Model

Groq Llama 3.3 was selected because it provides fast inference and high-quality business reasoning while remaining simple to integrate.

---

## Data Cleaning

A dedicated data-cleaning layer was implemented before sending data to the AI.

The cleaning process:

- Removes empty fields
- Handles null values
- Normalizes inconsistent values
- Simplifies records to reduce token usage

This improves response quality and reduces AI costs.

---

## Leadership Updates

I interpreted "leadership updates" as executive summaries containing:

- Sales Pipeline
- Operations Status
- Risks
- Recommendations

instead of simply listing records.

This provides actionable information for business leaders.

---

# Trade-offs

To remain within the free Groq API token limits:

- Only relevant cleaned records are sent to the AI.
- The application prioritizes concise business insights instead of exhaustive data dumps.

This improves response speed while keeping answers meaningful.

---

# Error Handling

The application handles:

- Missing data
- Empty fields
- Monday API failures
- AI API failures
- Backend connection failures

Users receive meaningful error messages instead of application crashes.

---

# Future Improvements

If additional development time were available, I would add:

- Charts and dashboards
- Authentication
- Role-based access
- Better query understanding
- Follow-up conversations
- Streaming AI responses
- Caching
- Advanced business KPIs

---

# Tech Stack Justification

React provides a lightweight and responsive user interface.

Express enables simple API development.

Groq provides fast AI inference.

Monday.com GraphQL API enables dynamic access to business data.

This stack allowed rapid development while meeting all assignment requirements.

---

# Conclusion

The delivered solution satisfies the assignment objectives by dynamically integrating with Monday.com, cleaning business data, and generating AI-powered business intelligence through a conversational interface.