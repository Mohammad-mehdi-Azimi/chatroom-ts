import React from 'react'
import styles from './search.module.css'


function Search() {
    return (
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <img src="/images/searchIcon.svg" alt="icon has problem" />
      </div>
    );
}

export default Search

