import React, { useEffect, useState } from "react";
import styles from './MoviePage.module.css';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  console.log(movies);

  useEffect(() => {
    // Retrieve selectedCategories from localStorage
    const selectedCategories = JSON.parse(localStorage.getItem("selectedCategories")) || [];

    // Extract the genre values from the array of objects
    const genreValues = selectedCategories.map(category => category.genre);

    // Set the genre state
    setGenre(genreValues);

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a96ab14b96msh0cfd68177ba0effp179978jsnf9a28e1afd4e",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genreValues.join(',')}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };

    fetchMovies();
  }, []); // Empty dependency array to run only on mount

  return (
    <>
      <p className={styles.heading} style={{ overflowY: "hidden" }}>
        {genre.join(', ')}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => (
          <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
            <img
              alt='Images'
              src={movie?.primaryImage?.url}
              style={{
                objectFit: "cover",
                width: "20vw",
                height: "15vh",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviePage;
