// slideshow.jsx
import React, { useState, useEffect } from "react"
import filmData from "./film-data.json"


const Slideshow = ({ filmIndex, setFilmIndex }) => {

const [films, setFilms] = useState(filmData);
const [timer, setTimer] = useState(null);
const [isPaused, setIsPaused] = useState(false);

const autoProgressNextFilm = () => {
    if (!isPaused) {
        if (filmIndex < filmData.length - 1) {
            setFilmIndex((index) => index + 1);
        } else {
            setFilmIndex(0);
        }
      }
    }

useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
  
    const newTimer = setTimeout(() => {
      autoProgressNextFilm();
    }, 8000);
  
    setTimer(newTimer);
  
    return () => {
      clearTimeout(newTimer);
    };
  }, [filmIndex]);


const sortFilmsByReleaseDate = () => {
  const sorted_films = [...films];
  sorted_films.sort((a, b) => a.release_date - b.release_date);
  setFilms(sorted_films)
}


const film = films[filmIndex]

// const handleNextClick = () => {
//   if (filmIndex < filmData.length - 1) {
//     setFilmIndex((index) => index + 1)
//   }
// }

const pauseToggle = () => {
    setIsPaused(!isPaused)

    if (!isPaused) {
        if (timer) {
            clearTimeout(timer);
        }
    const newTimer = setTimeout(() => {
        autoProgressNextFilm();
    }, 4000);
    setTimer(newtimer);
    }
}



const handleBackClick = () => {
  if (filmIndex > 0) {
    setFilmIndex((index) => index - 1)
  }
  clearTimeout(timer)
}

const handleStartOver = () => {
  if (filmIndex != 0) {
    setFilmIndex(0)
    }
  clearTimeout(timer)
}



  return (
    <div>
          <div className="fullBox">
            <h2>{film.title}</h2>
            <p>{film.original_title}</p>
            <img src={film.image} alt={film.title} />
            <p>Release Date: {film.release_date}</p>
            <p>Decription: {film.description}</p>
            <button onClick={sortFilmsByReleaseDate}>SORT BY RELESE DATE</button>
            <button onClick={handleBackClick}>BACK</button>
            <button className='pauseButton' onClick={pauseToggle}>
                {isPaused ? 'Pause' : 'Play'}
            </button>
            <button onClick={handleStartOver}>START OVER</button>
            <button onClick={autoProgressNextFilm}>NEXT</button>
          </div>
    </div>
  );
}

export default Slideshow;