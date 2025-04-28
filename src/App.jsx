import { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import CharacterList from './components/Characters/CharacterList';
import ContactForm from './components/Form/ContactForm';
import CharacterDetail from './components/Characters/CharacterDetail';
import './App.css';
import AboutInfo from './components/about/AboutInfo';
import ThemeProvider, {ThemeContext} from "./ThemeContext";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('username'); // true si existe username
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Obtener el tema actual desde el contexto
  const { modoOscuro, toggleTema } = useContext(ThemeContext);

  // Estilos dinámicos basados en el tema
  const estilo = {
    backgroundColor: modoOscuro ? "#222" : "#f5f7fb",
    color: modoOscuro ? "#fff" : "#000",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  return (
          <div style={estilo}>
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Layout onLogout={handleLogout} />}>
                <Route index element={<Navigate to="/characters" replace />} />
                <Route path="characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetail />} />
                <Route path="form" element={<ContactForm />} />
                <Route path="about" element={<AboutInfo />} />
              </Route>
            </>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <button
        onClick={toggleTema} className='btn-theme'
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: modoOscuro ? "#444" : "#3563E9",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          outline: "none",
      }}
      >
        Cambiar a Modo {modoOscuro ? "Claro" : "Oscuro"}
      </button>
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   return !!localStorage.getItem('username'); // true si existe username
  // });

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  // return (

  //   <BrowserRouter>
  //     <Routes>
  //       {!isLoggedIn ? (
  //         <Route path="/" element={<Login onLogin={handleLogin} />} />
  //       ) : (
  //         <>
  //           <Route path="/" element={<Layout onLogout={handleLogout} />}>
  //             <Route index element={<Navigate to="/characters" replace />} />
  //             <Route path="characters" element={<CharacterList />} />
  //             <Route path="/characters/:id" element={<CharacterDetail />} />
  //             <Route path="form" element={<ContactForm />} />
  //             <Route path="about" element={<AboutInfo />} />

  //           </Route>
  //         </>
  //       )}
  //       <Route path="*" element={<Navigate to="/" replace />} />
  //     </Routes>
      
  //   </BrowserRouter>
  // );

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

// export default App;