// src/ChatBox.js

import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, id: Date.now() }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-[350px] md:h-[96%]  mx-auto bg-white rounded-3xl w-[95%] shadow-lg">
      <div className="flex-1 p-4 overflow-auto border-b border-gray-200">
        {messages.length === 0 && <p className="text-center text-gray-500">No messages yet...</p>}
        {messages.map((message) => (
          <div key={message.id} className="mb-2">
            <div className="bg-gray-100 flex justify-end p-3 rounded-lg shadow-sm">
              {message.text}
            </div>
          </div>
        ))}
        {/* {messages.length === 0 && <p className="text-center text-gray-500"></p>}
        {Reply_messages.map((message) => (
          <div key={message.id} className="mb-2">
            <div className="bg-[#17212E] text-white p-3 rounded-lg shadow-sm">
              {message.text}
            </div>
          </div>
        ))} */}
      </div>
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-[#17212E]"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-[#17212E] text-white rounded-lg hover:bg-[#17212E] focus:outline-none focus:ring-2 focus:ring-[#17212E]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
