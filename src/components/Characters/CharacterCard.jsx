/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { use } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function CharacterCard({ character }) {
  const { id, name, images, species } = character;
  const fullName = `${name.first} ${name.middle || ''} ${name.last}`.trim();

  const {modoOscuro}=useContext(ThemeContext)

    const StyleCard = {
      backgroundColor: modoOscuro ? "#333" : "#FFFFFF",
      color: modoOscuro ? "#fff" : "#000",

    };

    const textStyle = {
      color: modoOscuro ? "#fff" : "#000",
    };
    
  return (
    <Link to={`/characters/${id}`} className="card-link">
      <div style= {StyleCard} className="character-card">
        <div className="character-image">
          <img
            src={images.main}
            alt={fullName}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150?text=No+Image';
            }}
          />
        </div>
        <div className="character-info" >
          <h2 style={textStyle}>{fullName}</h2>
          <p style={textStyle}>Especie: {species}</p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;