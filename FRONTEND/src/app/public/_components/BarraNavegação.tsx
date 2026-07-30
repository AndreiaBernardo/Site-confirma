import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const BarraNavegacao = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="cor-navbar cor-branca shadow-lg">
      {/* Desktop */}
      <div className="hidden md:flex texto-padrao h-24 items-center justify-center px-10 gap-10 font-medium tracking-wide text-2xl">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/login-familia">Confirmar Presença</NavLink>
        <NavLink to="/presentes">Lista de Presentes</NavLink>
        <NavLink to="/admin">Administração</NavLink>
      </div>

     
      <div className="md:hidden flex items-center justify-between h-16 px-4">
        <div className="font-bold text-lg">Yasmim</div>
        <button onClick={() => setMenuAberto(!menuAberto)} className="p-2">
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      {menuAberto && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4 font-medium">
          <NavLink
            to="/"
            onClick={() => setMenuAberto(false)}
            className="py-2 text-sm hover:text-violet-600"
          >
            Início
          </NavLink>
          <NavLink
            to="/login-familia"
            onClick={() => setMenuAberto(false)}
            className="py-2 text-sm hover:text-violet-600"
          >
            Confirmar Presença
          </NavLink>
          <NavLink
            to="/presentes"
            onClick={() => setMenuAberto(false)}
            className="py-2 text-sm hover:text-violet-600"
          >
            Lista de Presentes
          </NavLink>
          <NavLink
            to="/admin"
            onClick={() => setMenuAberto(false)}
            className="py-2 text-sm hover:text-violet-600"
          >
            Administração
          </NavLink>
        </div>
      )}
    </nav>
  );
};
