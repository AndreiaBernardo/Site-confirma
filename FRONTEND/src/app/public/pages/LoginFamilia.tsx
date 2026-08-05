import { useNavigate } from "react-router-dom";
import { loginFamilia } from "../../../services/familia.service";
import { useState } from "react";


export default function LoginFamilia() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");

const [senha, setSenha] = useState("");

  async function entrar(e: React.FormEvent) {

  e.preventDefault();

  try {

    const familia = await loginFamilia(
      nome,
      senha
    );

    localStorage.setItem(
      "familia",
      JSON.stringify(familia)
    );

    navigate("/confirmacao-presenca");

  } catch (error) {

    console.error(error);

    alert("Nome ou senha inválidos.");

  }

}

  return (
    <section
      className="max-w-md mx-auto mt-8 sm:mt-12 lg:mt-20 p-6 sm:p-8 rounded-2xl sm:rounded-2xl shadow-lg"
      style={{ backgroundColor: "var(--cor-branco)" }}
    >
      <h1 className="text-2xl sm:text-3xl text-center mb-6 sm:mb-8">
        Acesso da Família
      </h1>
      <p className="mb-4 text-center text-sm sm:text-base">
        Para acessar sua confirmação, informe seus dados.
      </p>
      <form className="flex flex-col gap-4" onSubmit={entrar}>
        <label htmlFor="nome" className="text-sm sm:text-base">
          Nome da familia
        </label>
        <input
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome da Familia"
          className="input text-sm sm:text-base"
        />

        <label htmlFor="senha" className="text-sm sm:text-base">
          Senha
        </label>
        <input
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          placeholder="Senha"
          className="input text-sm sm:text-base"
        />

        <button className="botao-entrar text-sm sm:text-base" type="submit">
          Entrar
        </button>

        <p className="text-xs sm:text-sm">Esqueceu sua senha?</p>
      </form>
    </section>
  );
}
