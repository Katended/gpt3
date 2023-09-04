import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatResponse } from '../../redux/chatSlice';
import './chatbox.css';

const Chatbox = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');

  const chatMessagesarray = useSelector((state) => state.chatStore.messages);

  useEffect(() => {}, [dispatch, chatMessagesarray]);

  const handleSendMessages = () => {
    dispatch(fetchChatResponse(userInput));
    setUserInput('');
  };

  return (
    <div className="gpt3__chatbox">
      <div className="gpt3__chatbox_chat_log">
        {chatMessagesarray.map((message) => (
          <div key={uuidv4()} className={`gpt3__chatbox-${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="gpt3__chatbox-container">
        <textarea className="gpt3__chatbox-input" placeholder="Type your question here..." rows="1" cols="50" name="chatbox-input-textarea" id="chatbox-input-textarea" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button type="button" onClick={handleSendMessages}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
