'use client';

import { useState, useRef, useEffect } from 'react';

const API_URL = 'https://kliniek-smile-demo-production.up.railway.app';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Blade & Ember! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const conversationHistory = useRef([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput('');
    conversationHistory.current.push({ role: 'user', content: text });
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat-barber`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: conversationHistory.current }),
      });
      const data = await response.json();
      const reply = data.reply;
      conversationHistory.current.push({ role: 'assistant', content: reply });
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I am having trouble connecting right now.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') sendMessage();
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button className="chat-fab" onClick={() => setIsOpen(true)} aria-label="Open chat">
          ✂️
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-avatar">✂️</span>
              <div>
                <p className="chat-title">Blade & Ember</p>
                <p className="chat-status">AI Assistant</p>
              </div>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="chat-bubble chat-bubble-bot chat-typing">
                <span /><span /><span />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-row">
            <input
              className="chat-input"
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="chat-send" onClick={sendMessage} disabled={isLoading} aria-label="Send">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
