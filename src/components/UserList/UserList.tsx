import React, { useRef } from "react";
import styles from "./userList.module.css";
import Search from "../search/Search";
import Contacts from "../contacts/Contacts";
import { useNavigate } from "react-router-dom";

function UserList() {
  const sortRef = useRef<HTMLHeadingElement | null>(null);

  const handleClick = () => {
    if (sortRef.current) {
      sortRef.current.classList.toggle(styles.show);
    }
  };

  const sortAz = () => {
    alert("دشوار بود متاسفانه");
  };


  return (
    <div className={styles.headUserList}>
      <h1>Messages</h1>
  
      <Search />
      <div className={styles.sort}>
        <h3>sort by</h3>
        <h2>
          Newest
          <img src="images/Vector.svg" alt="error" onClick={handleClick} />
        </h2>
      </div>
      <h2 className={styles.AZ} ref={sortRef} onClick={sortAz}>
        A-Z
      </h2>
      <div>
        <Contacts
          imgUrl="/images/userImg1.svg"
          userName="John doe"
          perviwe="How are you doing?"
          lastSeen="23:30"
        />
        <Contacts
          imgUrl="/images/anthony.svg"
          userName="Anthony Paul"
          perviwe="Check out my page 🤩"
          lastSeen="22:25"
        />
        <Contacts
          imgUrl="/images/vivienne.svg"
          userName="Vivienne Westwood"
          perviwe="This cat is so funny 😸"
          lastSeen="21:45"
        />
        <Contacts
          imgUrl="/images/tom.svg"
          userName="Tom Hardy"
          perviwe="Smells like design spirit.."
          lastSeen="20:36"
        />
        <Contacts
          imgUrl="/images/franz.svg"
          userName="Franz Kafka"
          perviwe="Are you intrested insectiti..."
          lastSeen="19:03"
        />
        <Contacts
          imgUrl="/images/george.svg"
          userName="George orwell"
          perviwe="Literally 1984🤨"
          lastSeen="18:21"
        />
        <Contacts
          imgUrl="/images/franz.svg"
          userName="Franz Kafka"
          perviwe="Are you intrested insectiti..."
          lastSeen="17:05"
        />
        <Contacts
          imgUrl="/images/elon.jpg"
          userName="Elon Musk"
          perviwe="To the moon! 🚀"
          lastSeen="16:58"
        />
        <Contacts
          imgUrl="/images/vivienne.svg"
          userName="Vivienne Westwood"
          perviwe="This cat is so funny 😸"
          lastSeen="15:13"
        />
        <Contacts
          imgUrl="/images/minion.jpg"
          userName="Kevin Minion"
          perviwe="Bello! Me want banana! 😄🍌"
          lastSeen="14:36"
        />
        <Contacts
          imgUrl="/images/stan.svg"
          userName="Stan Smith"
          perviwe="Want to see this kicks rn"
          lastSeen="13:39"
        />
      </div>
    </div>
  );
}

export default UserList;
