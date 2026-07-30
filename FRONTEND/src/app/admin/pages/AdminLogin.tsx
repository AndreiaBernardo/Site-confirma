import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";

import {
  loginAdmin,
  salvarAdmin,
} from "../../../services/admin.service";



export default function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");

  const [carregando, setCarregando] = useState(false);

  async function entrar(e: React.FormEvent) {

    e.preventDefault();

    try {

      setErro("");

      setCarregando(true);

      await loginAdmin(email, senha);

     const admin = await loginAdmin(
  email,
  senha
);



salvarAdmin(admin);

navigate("/admin/dashboard");

    } catch (error) {

      if (error instanceof Error) {

        setErro(error.message);

      } else {

        setErro("Erro ao realizar login.");

      }

    } finally {

      setCarregando(false);

    }

  }

  return (
    <section
      className="max-w-md mx-auto mt-20 p-8 rounded-2xl shadow-lg"
      style={{ backgroundColor: "var(--cor-branco)" }}
    >
      <h1 className="text-3xl text-center mb-8">
        Acesso Privado
      </h1>

      <p className="mb-4 text-center">
        Acessar o painel administrativo, por favor informe seus dados.
      </p>

      <form
        className="flex flex-col gap-4"
        onSubmit={entrar}
      >

        <label htmlFor="email">
          E-mail
        </label>

        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">
          Senha
        </label>

        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          className="input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && (
          <p className="text-red-600 text-sm font-medium">
            {erro}
          </p>
        )}

        <button
          className="botao-entrar"
          type="submit"
          disabled={carregando}
        >
          {carregando ? "Entrando..." : "Entrar"}
        </button>

        <Link
  to="/admin/esqueci-senha"
  className="text-center text-sm text-violet-700 hover:underline"
>
  Esqueceu sua senha?
</Link>

      </form>
    </section>
  );
}