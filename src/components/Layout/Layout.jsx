import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

function Layout({ onLogout }) { // <== Recibirlo aquí
  return (
    <div className="layout">
      <Navbar onLogout={onLogout} /> {/* SOLO UNA VEZ */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
