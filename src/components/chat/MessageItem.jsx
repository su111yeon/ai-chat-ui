function MessageItem({ sender, text }) {
    return (
        <div className={`message-item ${sender}`}>
            <div className="bubble">{text}</div>
        </div>
    );
}

export default MessageItem;
