import React from "react";

const Hero = ({ user }) => {
  return (
    <div className="hero">
      <h2>¡Hola, {user}!</h2>
      <p>Feliz Navidad y bienvenida a Emiflix.</p>
    </div>
  );
};

export default Hero;
