import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Gift,
  Images,
  MessageCircleHeart,
  Sparkles,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MenuAdmin() {
  const [menuAberto, setMenuAberto] = useState(false);
  const itensMenu = [
    { titulo: "Dashboard", rota: "/admin/dashboard", icone: LayoutDashboard },

    { titulo: "Convidados", rota: "/admin/convidados", icone: Users },

    {
      titulo: "Mensagens",
      rota: "/admin/mensagens",
      icone: MessageCircleHeart,
    },

    { titulo: "Presentes", rota: "/admin/presentes", icone: Gift },

    { titulo: "Galeria", rota: "/admin/galeria", icone: Images },
  ];

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex w-72 min-h-screen cor-navbar text-white flex-col">
        <div className="p-8 border-b border-violet-500 flex flex-col">
          <div className="flex items-center gap-3">
            <Sparkles size={30} />
            <h1 className="text-2xl font-bold">Yasmim</h1>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <p className="text-sm opacity-80">Painel administrativo</p>
          </div>
        </div>

        <nav className="flex flex-col gap-3 px-4 mt-8">
          {itensMenu.map((item) => {
            const Icone = item.icone;
            return (
              <NavLink
                key={item.rota}
                to={item.rota}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-md ${isActive ? "bg-violet-500" : "hover:bg-violet-600"}`
                }
              >
                <Icone size={22} />
                <span>{item.titulo}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto p-4">
          <NavLink
            to="/"
            className="flex items-center gap-3 p-2 hover:bg-violet-600 rounded-md"
          >
            <LogOut size={22} />
            <span>Sair</span>
          </NavLink>
        </div>
      </aside>

      {/* Mobile */}
      <div className="lg:hidden fixed top-20 right-0 z-40">
        <button
          className="bg-violet-700 text-white p-3 m-2 rounded-lg"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuAberto && (
        <div className="lg:hidden fixed top-28 right-0 w-64 h-screen cor-navbar text-white shadow-lg z-30 overflow-y-auto">
          <nav className="flex flex-col gap-2 p-4">
            {itensMenu.map((item) => {
              const Icone = item.icone;
              return (
                <NavLink
                  key={item.rota}
                  to={item.rota}
                  onClick={() => setMenuAberto(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md text-sm ${isActive ? "bg-violet-500" : "hover:bg-violet-600"}`
                  }
                >
                  <Icone size={20} />
                  <span>{item.titulo}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="p-4 border-t border-violet-500">
            <NavLink
              to="/"
              onClick={() => setMenuAberto(false)}
              className="flex items-center gap-3 p-3 hover:bg-violet-600 rounded-md text-sm"
            >
              <LogOut size={20} />
              <span>Sair</span>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
