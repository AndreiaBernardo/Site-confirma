import MenuAdmin from "../_components/MenuAdmin";
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div className="min-h-screen cor-fundo flex">
      <MenuAdmin />

      <main className="flex-1 px-8 py-10 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
