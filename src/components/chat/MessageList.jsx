import { useState, useEffect, useRef } from "react";
import MessageItem from "./MessageItem.jsx";
import ChatInput from "./ChatInput.jsx";
import "@/assets/style/MessageList.css";

function MessageList() {
    const [messages, setMessages] = useState([
        { id: 1, sender: "bot", text: "안녕하세요. 무엇을 도와드릴까요?" },
        // { id: 2, sender: "user", text: "리액트 포트폴리오용 채팅 UI를 만들고 싶어요." },
        // { id: 3, sender: "bot", text: "좋아요. 먼저 정적인 채팅 화면부터 만들어볼게요." },
    ]);

    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);

    const messageEndRef = useRef(null);

    const handleSendMessage = () => {
        const trimmedText = inputText.trim();
        if (!trimmedText) return;

        const newMessage = {
            id: Date.now(),
            sender: "user",
            text: trimmedText,
        };

        const tempBotMessageId = Date.now() + 1;

        const tempBotMessage = {
            id: tempBotMessageId,
            sender: "bot",
            text: "입력 중...",
            pending: true,
        };

        setMessages((prevMessages) => [...prevMessages, newMessage, tempBotMessage]);
        setInputText("");
        setLoading(true);

        setTimeout(() => {
            setMessages((prevMessages) =>
                prevMessages.map((message) =>
                    message.id === tempBotMessageId
                        ? {
                              ...message,
                              text: "답변을 준비 중입니다...",
                              pending: false,
                          }
                        : message,
                ),
            );

            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // const handleKeyDown = (e) => {
    //     if (e.key === "Enter") {
    //         handleSendMessage();
    //     }
    // };

    return (
        <div className="chat-wrap">
            <main className="message-list">
                {messages.map((message) => (
                    <MessageItem key={message.id} sender={message.sender} text={message.text} />
                ))}

                <div ref={messageEndRef} />
            </main>

            <ChatInput
                inputText={inputText}
                setInputText={setInputText}
                handleSendMessage={handleSendMessage}
                loading={loading}
                //  handleKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default MessageList;
