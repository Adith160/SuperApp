import React, { useState } from 'react';
import styles from  './Catagory.module.css';
import warnPng from '../../Images/warnImg.svg';
import actionImg from '../../Images/action.png';
import dramaImg from '../../Images/drama.png';
import romanceImg from '../../Images/romance.png';
import thrillerImg from '../../Images/thriller.png';
import westernImg from '../../Images/western.png';
import horrorImg from '../../Images/horror.png';
import fantasyImg from '../../Images/fantasy.png';
import musicImg from '../../Images/music.png';
import fictionImg from '../../Images/fiction.png';
import { useNavigate } from 'react-router-dom';



function Catagory() {
  // State to manage selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle category selection and unselection
  const handleCategoryClick = (category) => {
    // Check if the category is already selected
    const isSelected = selectedCategories.includes(category);

    // If selected, remove it; otherwise, add it to the selected categories
    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const navigate = useNavigate();
  const handleNextClick= ()=>{
    if(selectedCategories.length > 0){
      localStorage.setItem('selectedCat', JSON.stringify(selectedCategories));
      navigate("/home");
      console.log('Selected Successfully');
    }
    else
    console.log('Nothing selected');
    
  }

  return (
    <>
      <div className={styles.categoryBody}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>Super app</h1>
            <div className={styles.chooseTitle}>Choose your entertainment category</div>
            <div className={styles.slectedCat}>
              {selectedCategories.map((category, index) => (
                <div key={index} className={styles.selected}>
                  <span>{category}</span>
                  <button className={styles.unSelect} onClick={() => handleCategoryClick(category)}>
                    X
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.warning}>
              <img alt="Warning" src={warnPng} className={styles.warnImg} />
              <span>Minimum 3 categories required</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.categories}>
            {[
              { name: 'Action', imgSrc: actionImg },
              { name: 'Drama', imgSrc: dramaImg },
              { name: 'Romance', imgSrc: romanceImg },
              { name: 'Thriller', imgSrc: thrillerImg },
              { name: 'Western', imgSrc: westernImg },
              { name: 'Horror', imgSrc: horrorImg },
              { name: 'Fantasy', imgSrc: fantasyImg },
              { name: 'Music', imgSrc: musicImg },
              { name: 'Fiction', imgSrc: fictionImg },
            ].map((cat, index) => (
              <div key={index} className={`${styles.catCard} ${styles[cat.name]} ${selectedCategories.includes(cat.name) ? styles.selectedBorder : ''}`}
              onClick={() => handleCategoryClick(cat.name)}>
                <h3>{cat.name}</h3>
                <img src={cat.imgSrc} alt={cat.name} className={styles.cardImg} />
              </div>
            ))}
          </div>
          <button className={styles.nextBtn} onClick={handleNextClick}>Next Page</button>
        </div>
      </div>
    </>
  );
}

export default Catagory;
