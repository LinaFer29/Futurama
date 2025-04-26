import './About.css';
import imagenLina from './img/lina.jpg';
import imagenJuan from './img/juan2.jpg';


function AboutInfo() {
  return (
    <div className="about-container">
      <div className="profile-card">
        <div className="profile-image">
        <img src={imagenLina} alt="Foto de Lina" />
        </div>
        <div className="profile-info">
          <h2>Lina Fernandez</h2>
          <p><strong>Universidad:</strong> Universidad San Buenvanetura</p>
          <p><strong>Edad:</strong> 20 años</p>
          <p><strong>Estatura:</strong> 1.53 m</p>
          <p><strong>Carrera:</strong> Ingeniería de Sistemas</p>
        </div>
      </div>

      {/* Juan José */}
      <div className="profile-card">
        <div className="profile-image">
        <img src={imagenJuan} alt="Foto de Juan" />
        </div>
        <div className="profile-info">
          <h2>Juan José Pizo</h2>
          <p><strong>Universidad:</strong> Universidad de San Buenaventura</p>
          <p><strong>Edad:</strong> 20 años</p>
          <p><strong>Estatura:</strong> 1.75 m</p>
          <p><strong>Carrera:</strong> Ingeniería de Sistemas</p>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
