import React from "react";
import styles from "./chatInfo.module.css";
import Chat from "../Chat/Chat";

function ChatInfo() {
  return (
    <div className={styles.headChatInfo}>
      <div className={styles.ProfileInChatBox}>
        <div className={styles.ProfileInChat}>
          <img
            src="/images/elon.jpg"
            alt="picture not found"
            className={styles.prof}
            tabIndex={0}
          />
          <div className={styles.profileInfo}>
            <h2>Elon Musk</h2>
            <h3>Online</h3>
          </div>
          <div className={styles.boxInfo}>
            <div className={styles.viedo}>
              <img src="/images/videoCall.svg" alt="picture not found" />
            </div>
            <div className={styles.info}>
              <img src="/images/info.svg" alt="picture not found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInfo;
