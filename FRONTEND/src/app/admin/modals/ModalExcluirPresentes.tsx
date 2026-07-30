import type { Presente } from "../../shared/types/Presente";

interface ModalExcluirPresenteProps {
  aberto: boolean;
  presente?: Presente;
  onClose: () => void;
  onConfirmar: () => void;
}

export default function ModalExcluirPresente({
  aberto,
  presente,
  onClose,
  onConfirmar,
}: ModalExcluirPresenteProps) {

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full">

        <h2 className="text-2xl font-bold text-zinc-700 mb-4">
          Excluir presente
        </h2>

        <p className="text-zinc-600 mb-8">
          Deseja realmente excluir o presente
          <strong> "{presente?.nome}" </strong>?
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