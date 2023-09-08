// slideshow.jsx
import React, { useState } from "react"
import filmData from "./film-data.json"


const Slideshow = ({ filmIndex, setFilmIndex }) => {

const [films, setFilms] = useState(filmData);

const sortFilms = () => {
  const sorted_films = [...films];
  setFilms.sort(sorted_films)
}

const film = films[filmIndex]

const handleNextClick = () => {
  if (filmIndex < filmData.length - 1) {
    setFilmIndex((prevIndex) => prevIndex + 1)
  }
}
const handleBackClick = () => {
  if (filmIndex > 0) {
    setFilmIndex((prevIndex) => prevIndex - 1)
  }
}

const handleStartOver = () => {
  if (filmIndex != 0)
    setFilmIndex(0)
}



  return (
    <div>
          <div className="fullBox">
            <h2>{film.title}</h2>
            <p>{film.original_title}</p>
            <img src={film.image} alt={film.title} />
            <p>Release Date: {film.release_date}</p>
            <p>Decription: {film.description}</p>
            <button onClick={sortFilms}>SORT BY RELESE DATE</button>
            <button onClick={handleBackClick}>BACK</button>
            <button onClick={handleStartOver}>START OVER</button>
            <button onClick={handleNextClick}>NEXT</button>
          </div>
    </div>
  );
}

export default Slideshow;