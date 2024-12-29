import React from "react";

const MovieRow = () => {
  const movies = [
    {
      title: "Película 1",
      image: "https://i.ibb.co/q1fvzns/Peli1.png",
    },
    {
      title: "Película 2",
      image: "https://i.ibb.co/Fz6rPQj/peli2.png",
    },
    {
      title: "Película 3",
      image: "https://i.ibb.co/BCHysq3/Peli3.png",
    },
    {
      title: "Película 4",
      image: "https://i.ibb.co/0YpxQr0/peli4.png",
    },
    {
      title: "Película 5",
      image: "https://i.ibb.co/sVPPr8J/peli5.png",
    },
    {
      title: "Película 6",
      image: "https://i.ibb.co/Sy127Mp/peli6.png",
    },
    {
      title: "Película 7",
      image: "https://i.ibb.co/wsTbWbq/peli7.png",
    },
    {
      title: "Película 8",
      image: "https://i.ibb.co/qBRfVng/peli8.png",
    },
    {
      title: "Película 9",
      image: "https://i.ibb.co/Z8dNdmT/peli9.png",
    },
  ];

  return (
    <div className="movie-row-container">
      <h2 className="movie-row-title">Explora nuestras recomendaciones</h2>
      <div className="movie-row">
        {movies.map((movie) => (
          <img
            key={movie.title}
            src={movie.image}
            alt={movie.title}
            className="movie-image"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
