import React from "react";
import ChatInfo from "../chatInfo/ChatInfo";
import InputChat from "../inputChat/InputChat";
import SendMassage from "../sendMassage/SendMassage";
import styles from './chat.module.css'

function Chat() {
  return (
    <div className={styles.headOfChat}>
      <InputChat />
      <ChatInfo />
      <SendMassage />
    </div>
  );
}

export default Chat;
