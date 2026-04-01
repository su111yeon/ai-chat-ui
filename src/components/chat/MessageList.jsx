import { useState } from "react";
import MessageItem from "./MessageItem.jsx";
// import "./../../assets/style/MessageList.css";
import "@/assets/style/MessageList.css";

function MessageList() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "안녕하세요. 무엇을 도와드릴까요?" },
    { id: 2, sender: "user", text: "리액트 포트폴리오용 채팅 UI를 만들고 싶어요." },
    { id: 3, sender: "bot", text: "좋아요. 먼저 정적인 채팅 화면부터 만들어볼게요." },
  ]);

  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    const trimmedText = inputText.trim();

    if (!trimmedText) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedText,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-wrap">
      <main className="message-list">
        {messages.map((message) => (
          <MessageItem key={message.id} sender={message.sender} text={message.text} />
        ))}
      </main>

      <div className="chat-input-area">
        <input type="text" placeholder="메시지를 입력하세요" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
}

export default MessageList;
