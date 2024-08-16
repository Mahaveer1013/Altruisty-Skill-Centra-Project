import React, { useState, useEffect } from 'react';
import './bot.css';
import { apiKey } from './googleApi';
import axios from 'axios';

const ChatBot = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');

    const API_KEY = apiKey

    const questions = [
        "What can you do?",
        "Tell me a joke.",
        "What's the weather like today?",
        "How can I improve my coding skills?",
    ];

    useEffect(() => {
        setMessages([{ text: "Hey, could you tell me your name?", type: 'bot' }]);
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const getAiContent = async (question) => {
        try {
            const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
                {
                    contents: [{ role: 'user', parts: [{ text: question }] }]
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    params: { key: API_KEY }
                }
            );
      
            const data = response.data;
            console.log(data);
              
      
            // Process the response from API
            const responseMessage = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from API';
            return responseMessage;
        } catch (error) {
            console.log(error);
        }
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;
        setMessages((prevMessages) => [...prevMessages, { text: inputValue, type: 'user' }]);
        const userMessage = inputValue;
        setInputValue('');

        if (!userName) {
            setUserName(userMessage);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: `Nice to meet you, ${userMessage}!`, type: 'bot' },
                ...questions.map((question, index) => ({ text: `${index + 1}. ${question}`, type: 'bot', isQuestion: true, questionIndex: index })),
            ]);
        } else {
            try {
                setLoading(true);
                const data = await getAiContent(inputValue)

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: data, type: 'bot' },
                ]);
            } catch (error) {
                console.error("Error fetching response:", error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "Something went wrong. Please try again.", type: 'bot' },
                ]);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleQuestionClick = async (questionIndex) => {
        const question = questions[questionIndex];
        try {
            setLoading(true);
            const data = await getAiContent(question)

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: question, type: 'user' },
                { text: data, type: 'bot' },
            ]);
        } catch (error) {
            console.error("Error fetching response:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Something went wrong. Please try again.", type: 'bot' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-chat-interface">
            <div className="container">
                <h1>CG Bot</h1>
                {loading ? (
                    <div className="text-center mt-3">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.type}`}
                            onClick={message.isQuestion ? () => handleQuestionClick(message.questionIndex) : undefined}
                        >
                            {message.text}
                        </div>
                    ))
                )}
            </div>
            <div className="in-cont">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Ask me something..."
                    style={{color:'black'}}
                />
                <button onClick={handleSend} disabled={loading} className="button-5">
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
