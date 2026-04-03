function ChatInput({ inputText, setInputText, handleSendMessage, loading }) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-input-area">
            <input type="text" placeholder="메시지를 입력하세요" value={inputText} onChange={(event) => setInputText(event.target.value)} onKeyDown={handleKeyDown} disabled={loading} />
            <button type="button" onClick={handleSendMessage} disabled={loading}>
                {loading ? "전송 중..." : "전송"}
            </button>
        </div>
    );
}

export default ChatInput;
