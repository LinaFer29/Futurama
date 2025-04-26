import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import CharacterList from './components/Characters/CharacterList';
import ContactForm from './components/Form/ContactForm';
import CharacterDetail from './components/Characters/CharacterDetail';
import './App.css';
import AboutInfo from './components/about/AboutInfo';
import ThemeProvider, {ThemeContext} from "./ThemeContext";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('username'); // true si existe username
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (

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
    </BrowserRouter>
  );
}

export default App;