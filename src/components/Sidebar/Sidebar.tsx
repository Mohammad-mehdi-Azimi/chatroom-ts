import React from "react";
import styles from "./sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.headOfSide}>
      <img
        src="/images/logo.svg"
        alt="logo picture not found"
        className={styles.logo}
      />
      <img src="/images/me.jpg" alt="no profile" className={styles.myPicture} />
      <div className={styles.line}></div>
      <div className={styles.switch}>
        <div className={styles.browserIcon}>
          <img src="/images/browser.svg" alt="picture not found" />
        </div>
        <div className={styles.masages}>
          <img src="/images/masages.svg" alt="picture not found" />
          <div className={styles.videoCall}>
            <img src="/images/videoCall.svg" alt="" />
          </div>
          <div className={styles.musics}>
            <img src="/images/musics.svg" alt="picture not found" />
          </div>
          <div className={styles.calendar}>
            <img src="/images/calendar.svg" alt="picture not found" />
          </div>
        </div>
      </div>
      <div className={styles.setting}>
        <img src="/images/setting.svg" alt="picture not found" />
      </div>
      <div className={styles.exit}>
        <img src="/images/exit.svg" alt="picture not found" />
      </div>
    </div>
  );
}

export default Sidebar;
