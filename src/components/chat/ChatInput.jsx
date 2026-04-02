import { useState } from "react";

function ChatInput() {
    const [inputText, setInputText] = useState("");

    return (
        <div className="chat-input-area">
            <input type="text" placeholder="메시지를 입력하세요" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={handleKeyDown} />
            <button onClick={handleSendMessage} disabled={loading}>
                {loading ? "전송 중..." : "전송"}
            </button>
        </div>
    );
}

export default ChatInput;
