// slideshow.jsx
import React, { useState } from "react"
import filmData from "./film-data.json"


const Slideshow = ({ filmIndex, setFilmIndex }) => {
const film = filmData[filmIndex]


  return (
    <div>
      {/* {filmData.map((film, index) => ( */}
        {/* <div key={index} className="container"> */}
          <div className="fullBox">
            <h2>{film.title}</h2>
            <p>{film.original_title}</p>
            <img src={film.image} alt={film.title} />
            <p>Release Date: {film.release_date}</p>
            <p>Decription: {film.description}</p>
            <button>NEXT</button>
          </div>
        {/* </div> */}
      {/* ))} */}
    </div>
  );
}

export default Slideshow;