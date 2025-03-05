import React from 'react'
import styles from "./inputChat.module.css";

function InputChat() {
  return (
    <div className={styles.headOfInput}>
      <div className={styles.flexDis}>
        <div className={styles.container}>
          <img src="/images/elonMuskSmok.png" alt="picture not found" tabIndex={0}/>
          <h2>Need You to make it X</h2>
          <div className={styles.You}>
            <h1>On it</h1>
            <h1>And when you sey make it X, just to clarify, you mean...</h1>
          </div>
          <h2>Twitter</h2>
          <div className={styles.You}>
            <h1>Right</h1>
            <h1>Sorry just one more thing</h1>
            <h1>What do you mean make it X</h1>
          </div>
          <h2>What?</h2>
          <div className={styles.You}>
            <h1>What?</h1>
          </div>
          <h2>HeHe You fired</h2>
        </div>
      </div>
    </div>
  );
}

export default InputChat;