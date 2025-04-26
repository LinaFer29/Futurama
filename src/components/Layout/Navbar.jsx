import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import InstallButton from './InstallButton'; 


function Navbar({ onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
    setShowMenu(false);
    onLogout(); // 
    navigate('/');
  };  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/characters">
            <span className="logo-text">FUTURAMA</span>
          </Link>
        </div>
        
        <div className="navbar-links">
          <Link 
            to="/characters" 
            className={location.pathname === '/characters' ? 'active' : ''}
          >
            Personajes
          </Link>
          <Link 
            to="/form" 
            className={location.pathname === '/form' ? 'active' : ''}
          >
            Formulario
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            Sobre Nosotros
          </Link>


          {username && (
            <div className="user-menu">
              <span onClick={toggleMenu} className="username">
                {username} ⬇️
              </span>
              {showMenu && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
              )}
            </div>
          )}
          <InstallButton /> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
