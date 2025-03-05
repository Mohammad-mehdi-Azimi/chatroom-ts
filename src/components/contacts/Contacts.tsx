import React from "react";
import styles from "./contacts.module.css";

type Users ={
imgUrl:string
userName:string
perviwe:string
lastSeen:string
} 


function Contacts( {imgUrl ,userName , perviwe , lastSeen}:Users ) {
  return (
    <div className={styles.headContact}>
      <div className={styles.box}>
        <img src={imgUrl} alt="JD" className={styles.profile} />
        <div>
          <img src="/images/onlinesine.svg" className={styles.online} />
        </div>
        <div className={styles.informention}>
          <h1>{userName}</h1>
          <h2>{perviwe}</h2>
        </div>
      </div>
      <div className={styles.date}>
        <h1>{lastSeen}</h1>
        <img src="/images/seen>.svg" alt="error" />
      </div>
    </div>
  );
}

export default Contacts;
