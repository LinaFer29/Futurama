import { useState } from 'react';
import './Login.css';
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function Login({ onLogin }) {
  const { modoOscuro } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const cardStyle = {
    backgroundColor: modoOscuro ? "#333" : "#f9f9f9",
    color: modoOscuro ? "white" : "black",
    border: modoOscuro ? "1px solid #555" : "1px solid #ccc",
  };
  
  const containerStyle = {
    backgroundColor: modoOscuro ? "#222" : "#fff",
    color: modoOscuro ? "white" : "black",
  };
  
  const titleStyle = {
    color: modoOscuro ? "#fff" : "#000",
  };

  const subtitleStyle = {
    color: modoOscuro ? "#bbb" : "#666",
  };

  const inputStyle = {
    backgroundColor: modoOscuro ? "#444" : "#fff",
    color: modoOscuro ? "#fff" : "#000",
    border: modoOscuro ? "1px solid #555" : "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: modoOscuro ? "#3563E9" : "#3563E9",
    color: modoOscuro ? "#fff" : "#000",
    border: modoOscuro ? "none" : "1px solid #007bff",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    // Guarda el nombre en localStorage
    localStorage.setItem('username', username);

    // Llama la función para actualizar el estado
    onLogin();
  };

  return (
    <div className="login-container" style={containerStyle}>
      <div className="login-card" style={cardStyle}>
        <h1 style={titleStyle}>Bienvenido</h1>
        <p className="login-subtitle" style={subtitleStyle}>Ingresa tus credenciales para continuar</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="username" style={titleStyle}>Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
              style={inputStyle}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" style={titleStyle}>Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              style={inputStyle}
            />
          </div>
          
          <button type="submit" className="login-button" style={buttonStyle}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
