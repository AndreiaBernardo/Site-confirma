import LinhaMensagem from "./LinhaMensagem";
import type { Mensagem } from "../../shared/types/Mensagem";

interface TabelaMensagensProps {
  mensagens: Mensagem[];
  onVisualizar: (mensagem: Mensagem) => void;
  onExcluir: (mensagem: Mensagem) => void;
}

export default function TabelaMensagens({
  mensagens,
  onVisualizar,
  onExcluir,
}: TabelaMensagensProps) {
  if (mensagens.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-zinc-500">
        Nenhuma mensagem encontrada.
      </div>
    );
  }

  return (
    <>
      <p className="md:hidden text-center text-sm text-gray-500 mb-3">
        👈 Deslize para visualizar todas as colunas
      </p>
      <div className="bg-white rounded-3xl shadow-lg overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-violet-700 text-white">
            <tr>
              <th className="text-left p-5">Nome</th>

              <th className="text-left">Mensagem</th>

              <th className="text-center">Data</th>

              <th className="text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {mensagens.map((mensagem) => (
              <LinhaMensagem
                key={mensagem.id}
                mensagem={mensagem}
                onVisualizar={onVisualizar}
                onExcluir={onExcluir}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
