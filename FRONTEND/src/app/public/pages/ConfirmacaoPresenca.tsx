import { UserRound } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Convidado } from "../../shared/types/Convidado";
import type { Familia } from "../../shared/types/Familia";
import { confirmarPresenca } from "../../../services/convidado.services";




export const ConfirmacaoPresenca = () => {

  const [familia, setFamilia] = useState<Familia | null>(null);
  const [convidados, setConvidados] = useState<Convidado[]>([]);

  const navigate = useNavigate();

  function alterarConfirmacao(id: number, confirmado: boolean) {
    setConvidados((lista) =>
      lista.map((convidado) =>
        convidado.id === id
          ? {
              ...convidado,
              confirmado,
            }
          : convidado,
      ),
    );
  }

async function salvarConfirmacao(
  e: React.FormEvent
) {

  e.preventDefault();

  try {

    await Promise.all(

      convidados.map((convidado) =>

        confirmarPresenca(

          convidado.id,

          convidado.confirmado ?? false

        )

      )

    );

    const vaiParticipar = convidados.some(

      (convidado) => convidado.confirmado === true

    );

    navigate("/confirmacao-final", {

      state: {

        vaiParticipar,

      },

    });

  } catch (error) {

    console.error(error);

    alert("Erro ao salvar confirmação.");

  }

}

  useEffect(() => {

  const dados = localStorage.getItem("familia");

  if (!dados) return;

  const familiaLogada = JSON.parse(dados);

  setFamilia(familiaLogada);

  setConvidados(
    familiaLogada.convidados.map((convidado: Convidado) => ({
      ...convidado,
      confirmado: null,
    }))
  );

}, []);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-12">
       <h1 className="titulo-principal">

Confirmação da Família {familia?.nome}

</h1>
        <p className="text-center mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
          Confirme abaixo quais convidados irão comparecer a festa
        </p>
      </div>

      <form onSubmit={salvarConfirmacao} className="space-y-4 sm:space-y-6">
        {convidados.map((convidado) => (
          <div
            key={convidado.id}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <UserRound
                  size={36}
                  className="text-violet-700 flex-shrink-0"
                />

                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold truncate">
                    {convidado.nome}
                  </h3>
                  <p className="text-sm text-gray-600">Convidado</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-auto">
                <label className="flex items-center gap-2 cursor-pointer hover:text-violet-700 transition-colors">
                  <input
                    type="radio"
                    name={`convidado-${convidado.id}`}
                    checked={convidado.confirmado === true}
                    onChange={() => alterarConfirmacao(convidado.id, true)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">Irá participar</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:text-violet-700 transition-colors">
                  <input
                    type="radio"
                    name={`convidado-${convidado.id}`}
                    checked={convidado.confirmado === false}
                    onChange={() => alterarConfirmacao(convidado.id, false)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">
                    Não irá participar
                  </span>
                </label>
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="botao-confirma mt-8 sm:mt-10 w-full sm:w-auto"
        >
          Salvar Confirmação
        </button>
      </form>
    </section>
  );
};
