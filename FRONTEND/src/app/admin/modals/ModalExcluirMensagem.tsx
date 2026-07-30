import type { Mensagem } from "../../shared/types/Mensagem";

interface ModalExcluirMensagemProps {
  aberto: boolean;
  mensagem?: Mensagem;
  onClose: () => void;
  onConfirmar: () => void;
}

export default function ModalExcluirMensagem({
  aberto,
  mensagem,
  onClose,
  onConfirmar,
}: ModalExcluirMensagemProps) {

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-zinc-700 mb-4">
          Excluir Mensagem
        </h2>

        <p className="text-zinc-600 mb-8">
          Deseja realmente excluir a mensagem enviada por{" "}
          <strong>{mensagem?.nome}</strong>?
        </p>

        <div className="flex justify-end gap-4">

          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-xl hover:bg-zinc-100"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirmar}
            className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
          >
            Excluir
          </button>

        </div>

      </div>

    </div>
  );
}