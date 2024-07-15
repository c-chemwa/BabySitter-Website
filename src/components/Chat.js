import React, { useState, useEffect } from 'react';
import './Chat.css'; // Add CSS styling for chat

const Chat = ({ chatId }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch chat messages from the server
    }, [chatId]);

    const sendMessage = () => {
        // Send message to the server
    };

    return (
        <div className="chat">
            <div className="messages">
                {messages.map(msg => (
                    <div key={msg.id} className="message">
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <input 
                type="text" 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
