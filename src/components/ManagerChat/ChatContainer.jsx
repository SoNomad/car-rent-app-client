import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { getAllMessagesRoute, sendMessageRoute } from '../../utils/APIRoutes';
import styles from './ChatContainer.module.scss';
import ChatInput from './ChatInput';
import Logout from './Logout';
import { v4 as uuidv4 } from 'uuid';

const ChatContainer = ({ currentChat, currentUser, socket }) => {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    const axReq = async () => {
      if (currentChat) {
        const response = await axios.post(getAllMessagesRoute, {
          from: currentUser._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    };
    axReq();
  }, [currentChat, messages]);

  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit('send-msg', {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };
  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-receive', (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {currentChat && (
        <div className={styles.container}>
          <div className={styles.chat_header}>
            <div className={styles.user_details}>
              <div className={styles.avatar}>
                <img src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt="avatar" />
              </div>
              <div className={styles.username}>
                <h3>{currentChat.username}</h3>
              </div>
            </div>
            <Logout />
          </div>

          <div className={styles.chat_messages}>
            {messages.map((message) => {
              return (
                <div ref={scrollRef} key={uuidv4()}>
                  <div className={message.fromSelf ? styles.messageSended : styles.messageReceived}>
                    <div className={styles.content}>
                      <p>{message.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      )}
    </>
  );
};

export default ChatContainer;
