import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import InstallButton from './InstallButton'; 
import { useContext } from "react";
import { ThemeContext } from '../../ThemeContext';

function Navbar({ onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const { modoOscuro } = useContext(ThemeContext);

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

  const navbarStyle = {
    backgroundColor: modoOscuro ? '#222' : '#FFFFFF', 
    color: modoOscuro ? '#fff' : '#000',               
    borderBottom: modoOscuro ? '1px solid #555' : '1px solid #ccc',
  };

  const linkStyle = {
    color: modoOscuro ? '#fff' : '#000',
  };
  
  const userMenuStyle = {
    color: modoOscuro ? '#fff' : '#000',
  };

  

  return (
    <nav className="navbar" style={navbarStyle}>
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
            style={linkStyle}
          >
            Personajes
          </Link>
          <Link 
            to="/form" 
            className={location.pathname === '/form' ? 'active' : ''}
            style={linkStyle}
          >
            Formulario
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
            style={linkStyle}
          >
            Sobre Nosotros
          </Link>
         
            {username && (
            <div onClick={toggleMenu} className="user-menu">
              <span className="username" style={userMenuStyle}>
                {username} 
              </span>
                <img src="/img/cerrar-sesion-de-usuario.png" alt="Icon Cerrar Sesion" className='icon-logout' /> 
              {showMenu && (
                <div className="dropdown-menu">
                  <button style={{outline: "none"}} onClick={handleLogout}>Cerrar sesión</button>
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
