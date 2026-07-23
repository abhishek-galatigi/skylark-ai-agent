import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  async function askQuestion(customQuestion) {
    const finalQuestion = customQuestion || question;

    if (!finalQuestion.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: finalQuestion,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          question: finalQuestion,
          answer: data.answer,
        },
      ]);

      setQuestion("");
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          question: finalQuestion,
          answer: "❌ Unable to connect to backend.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="container">

      <h1>📊 Skylark Business Intelligence Agent</h1>

      <p className="subtitle">
        AI-powered founder insights from live Monday.com data
      </p>

      <div className="status">
        🟢 Connected to Monday.com
      </div>

      <div className="quick-buttons">

        <button onClick={() => askQuestion("How is our Mining pipeline?")}>
          📈 Mining Pipeline
        </button>

        <button onClick={() => askQuestion("Generate a leadership update")}>
          📋 Leadership Update
        </button>

        <button onClick={() => askQuestion("Which sector has the highest pipeline?")}>
          🏆 Highest Pipeline
        </button>

        <button onClick={() => askQuestion("Show delayed work orders")}>
          ⚠️ Delayed Orders
        </button>

      </div>

      <input
        type="text"
        placeholder="Ask a business question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            askQuestion();
          }
        }}
      />

      <button onClick={() => askQuestion()}>
        {loading ? "🔄 Analyzing Business Data..." : "🚀 Ask AI"}
      </button>

      <div className="response">

        <h2>💬 Conversation</h2>

        {messages.length === 0 ? (
          <div className="empty">
            Ask a question to begin your business analysis.
          </div>
        ) : (
          messages.map((msg, index) => (

            <div key={index} className="chat-card">

              <div className="user-message">

                <strong>👤 You</strong>

                <p>{msg.question}</p>

              </div>

              <div className="ai-message">

                <strong>🤖 AI Agent</strong>

                <pre>{msg.answer}</pre>

              </div>

            </div>

          ))
        )}

      </div>

      <hr />

      <p className="footer">
        Powered by React • Express • Monday.com API • Groq Llama 3.3
      </p>

    </div>
  );
}

export default App;