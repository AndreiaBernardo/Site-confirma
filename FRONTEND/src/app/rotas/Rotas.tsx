import { Route, Routes } from "react-router-dom";
import Inicio from "../public/pages/Inicio";
import LoginFamilia from "../public/pages/LoginFamilia";
import { ConfirmacaoPresenca } from "../public/pages/ConfirmacaoPresenca";
import ConfirmacaoFinal from "../public/pages/ConfirmacaoFinal";
import Presentes from "../public/pages/Presentes";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminDashboard from "../admin/pages/AdminDashboard";
import AdminConvidados from "../admin/pages/AdminConvidados";
import AdminMensagens from "../admin/pages/AdminMensagens";
import AdminPresentes from "../admin/pages/AdminPresentes";
import AdminGaleria from "../admin/pages/AdminGaleria";
import LayoutAdmin from "../admin/_components/LayoutAdmin";
import EsqueciMinhaSenha from "../admin/pages/EsqueciMinhaSenha";
import AdminCadastro from "../admin/pages/AdminCadastro";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login-familia" element={<LoginFamilia />} />
      <Route path="/confirmacao-presenca" element={<ConfirmacaoPresenca />} />
      <Route path="/confirmacao-final" element={<ConfirmacaoFinal />} />
      <Route path="/presentes" element={<Presentes />} />

      <Route
  path="/admin/cadastro"
  element={<AdminCadastro />}
/>
      <Route path="/admin" element={<AdminLogin />} />

      <Route
  path="/admin/esqueci-senha"
  element={<EsqueciMinhaSenha />}
/>
      
      <Route path="/admin" element={<LayoutAdmin />}>

    <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
    />

    <Route
        path="/admin/convidados"
        element={<AdminConvidados />}
    />

    <Route
        path="/admin/mensagens"
        element={<AdminMensagens />}
    />

    <Route
        path="/admin/presentes"
        element={<AdminPresentes />}
    />

    <Route
        path="/admin/galeria"
        element={<AdminGaleria />}
    />

</Route>
    </Routes>
  );
}
