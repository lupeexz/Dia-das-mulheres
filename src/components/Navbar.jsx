import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `px-4 py-2 rounded-lg transition font-medium ${
      location.pathname === path
        ? "bg-white text-primary shadow"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          Dia da Mulher
        </h1>

        <div className="flex gap-2">
          <Link to="/" className={linkStyle("/")}>Home</Link>
          <Link to="/pag1" className={linkStyle("/pag1")}>Música</Link>
          <Link to="/pag2" className={linkStyle("/pag2")}>Computação</Link>
          <Link to="/pag3" className={linkStyle("/pag3")}>Disparidade</Link>
          <Link to="/pag4" className={linkStyle("/pag4")}>Históricas</Link>
          <Link to="/pag5" className={linkStyle("/pag5")}>Esporte</Link>
        </div>
      </div>
    </nav>
  );
} 