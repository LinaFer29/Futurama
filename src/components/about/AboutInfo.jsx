import './About.css';
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function AboutInfo() {

  const {modoOscuro}=useContext(ThemeContext)

  const profileCardStyle = {
    backgroundColor: modoOscuro ? "#333" : "#FFFFFF",
    color: modoOscuro ? "#fff" : "#000",

  };

  const textStyle = {
    color: modoOscuro ? "#fff" : "#000",
  };

  return (
    <div className='about-container'>
      <div className="about-header">
        <h1 className="about-title">Conoce a nuestro equipo</h1>
        <p className="about-subtitle">Somos dos estudiantes aprendiendo sobre desarrollo web</p>
        <hr className="decorative-line"></hr>
      </div>
      <div className="profile-container">
        <div className="profile-card" style={profileCardStyle}>
          <div className="profile-image">
            <img src="/img/Lina.jpg" alt="Foto de Lina" />
          </div>
          <div className="profile-info">
            <h2 style={textStyle}>Lina María Fernandez G</h2>
            <p style={textStyle}><strong>Universidad:</strong> Universidad San Buenvanetura</p>
            <p style={textStyle}><strong>Edad:</strong> 20 años</p>
            <p style={textStyle}><strong>Estatura:</strong> 1.53 m</p>
            <p style={textStyle}><strong>Carrera:</strong> Ingeniería de Sistemas</p>
          </div>
        </div>

        {/* Juan José */}
        <div className="profile-card" style={profileCardStyle}>
          <div className="profile-image">
            <img src="/img/juan2.jpg" alt="Foto de Juan" />
          </div>
          <div className="profile-info">
            <h2 style={textStyle}>Juan José Pizo Camacho</h2>
            <p style={textStyle}><strong>Universidad:</strong> Universidad de San Buenaventura</p>
            <p style={textStyle}><strong>Edad:</strong> 20 años</p>
            <p style={textStyle}><strong>Estatura:</strong> 1.75 m</p>
            <p style={textStyle}><strong>Carrera:</strong> Ingeniería de Sistemas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
