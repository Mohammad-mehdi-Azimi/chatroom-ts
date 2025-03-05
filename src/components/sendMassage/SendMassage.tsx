import React from 'react'
import styles from './sendMassage.module.css'


function SendMassage() {
  return (
    <div className={styles.headOfMassage}>
      <input type="text" placeholder="Type your message here.." />
      <img src="/images/sendFile.svg" alt="send file" />
      <h3>Send message</h3>
    </div>
  );
}

export default SendMassage