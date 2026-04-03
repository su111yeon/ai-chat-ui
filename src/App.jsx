import ChatHeader from "./components/chat/ChatHeader";
import MessageList from "./components/chat/MessageList";
// import ChatInput from "./components/chat/ChatInput";
// import ChatHeader from "./components/chat/ChatHeader.jsx";
// import ChatInput from "./components/chat/ChatInput.jsx";
// import MessageList from "./components/chat/MessageList.jsx";
import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="chat-container">
                <ChatHeader />
                <MessageList />
            </div>
        </div>
    );
}

export default App;
