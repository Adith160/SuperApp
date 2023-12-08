import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Weather from './Weather'
import News from './News';

function Home() {

  const [category,setCategory] = useState([]);
  const [userData,setUserData] = useState([]);


  useEffect(() => {
    const cat = JSON.parse(localStorage.getItem('selectedCat'));
    const user = JSON.parse(localStorage.getItem('userData'));
  
    if (cat !== null) {
      setCategory(cat);
    }
  
    if (user !== null) {
      setUserData(user);
    }
  }, []);


  return (
    <>
    <div className={styles.homeBody}>
      <div className={styles.mainContent}>
        <div className={styles.topContent}>
        <div className={styles.topLeftContent}>


        <div className={styles.userProfile}>
        <div className={styles.profileImg}></div>
        <div className={styles.profileInfo}>
        <div className={styles.userData}>
          <p className={styles.userName}>{userData.name} <br/> {userData.email}  <br/> <h3 className={styles.uName}>{userData.uName} </h3></p>
        </div>
        <div className={styles.userCategory}>
          
        {
  Array.isArray(category) && category.map((cat, index) => (
    <div className={styles.category} key={index}>{cat}</div>
  ))
}


       
        </div> </div>
        </div>
          <Weather />
        </div>
        
        <div className={styles.topRightContent}> <h2>All notes</h2>
        <div className={styles.notes}>
        <textarea name='note' placeholder='write something here'></textarea>
        </div>

        </div>
        </div>
        <div className={styles.bottomContent}></div>
        </div>

        <div className={styles.newstContent}>
        <News />
        </div>
    </div>
    </>
  )
}

export default Home