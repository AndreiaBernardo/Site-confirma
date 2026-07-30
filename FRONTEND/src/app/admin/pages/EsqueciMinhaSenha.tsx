import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { redefinirSenhaAdmin } from "../../../services/admin.service";

export default function EsqueciMinhaSenha() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [novaSenha, setNovaSenha] = useState("");

  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erro, setErro] = useState("");

  const [sucesso, setSucesso] = useState("");

  const [carregando, setCarregando] = useState(false);

  async function salvar(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setErro("");

    setSucesso("");

    if (novaSenha !== confirmarSenha) {

      setErro("As senhas não coincidem.");

      return;

    }

    try {

      setCarregando(true);

      await redefinirSenhaAdmin(
        email,
        novaSenha
      );

      setSucesso(
        "Senha alterada com sucesso."
      );

      setTimeout(() => {

        navigate("/admin");

      }, 2000);

    } catch (error) {

      if (error instanceof Error) {

        setErro(error.message);

      }

    } finally {

      setCarregando(false);

    }

  }

  return (

    <section
      className="max-w-md mx-auto mt-20 p-8 rounded-2xl shadow-lg bg-white"
    >

      <h1 className="text-3xl text-center mb-8">

        Redefinir senha

      </h1>

      <form
        onSubmit={salvar}
        className="flex flex-col gap-4"
      >

        <input
          className="input"
          placeholder="E-mail"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="input"
          type="password"
          placeholder="Nova senha"
          value={novaSenha}
          onChange={(e) =>
            setNovaSenha(e.target.value)
          }
        />

        <input
          className="input"
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) =>
            setConfirmarSenha(e.target.value)
          }
        />

        {erro && (
          <p className="text-red-600">
            {erro}
          </p>
        )}

        {sucesso && (
          <p className="text-green-600">
            {sucesso}
          </p>
        )}

        <button
          className="botao-entrar"
          disabled={carregando}
        >
          {carregando
            ? "Salvando..."
            : "Salvar"}
        </button>

      </form>

    </section>

  );

}