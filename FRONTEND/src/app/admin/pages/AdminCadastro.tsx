import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cadastrarAdmin } from "../../../services/admin.service";

export default function AdminCadastro() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  const [confirmarSenha, setConfirmarSenha] =
    useState("");

  const [erro, setErro] = useState("");

  const [carregando, setCarregando] =
    useState(false);

  async function cadastrar(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setErro("");

      if (senha !== confirmarSenha) {

        setErro(
          "As senhas não coincidem."
        );

        return;

      }

      setCarregando(true);

      await cadastrarAdmin(
        nome,
        email,
        senha
      );

      alert(
        "Administrador cadastrado com sucesso!"
      );

      navigate("/admin");

    } catch (error) {

      if (error instanceof Error) {

        setErro(error.message);

      } else {

        setErro(
          "Erro ao cadastrar administrador."
        );

      }

    } finally {

      setCarregando(false);

    }

  }

  return (

    <section
      className="max-w-md mx-auto mt-20 p-8 rounded-2xl shadow-lg"
      style={{
        backgroundColor:
          "var(--cor-branco)",
      }}
    >

      <h1 className="text-3xl text-center mb-8">

        Administrador

      </h1>

      <p className="mb-6 text-center">

        Cadastro do administrador do sistema.

      </p>

      <form
        className="flex flex-col gap-4"
        onSubmit={cadastrar}
      >

        <label>Nome</label>

        <input
          className="input"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

        <label>E-mail</label>

        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <label>Senha</label>

        <input
          type="password"
          className="input"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
        />

        <label>

          Confirmar Senha

        </label>

        <input
          type="password"
          className="input"
          value={confirmarSenha}
          onChange={(e) =>
            setConfirmarSenha(
              e.target.value
            )
          }
        />

        {erro && (

          <p className="text-red-600">

            {erro}

          </p>

        )}

        <button
          type="submit"
          className="botao-confirma"
          disabled={carregando}
        >

          {carregando
            ? "Cadastrando..."
            : "Cadastrar Administrador"}

        </button>

      </form>

    </section>

  );

}