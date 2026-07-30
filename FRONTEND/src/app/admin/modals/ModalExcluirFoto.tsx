import type { Foto } from "../../shared/types/Foto";

interface ModalExcluirFotoProps {
  aberto: boolean;
  foto?: Foto;
  onClose: () => void;
  onConfirmar: () => void;
}

export default function ModalExcluirFoto({
  aberto,
  foto,
  onClose,
  onConfirmar,
}: ModalExcluirFotoProps) {

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold text-zinc-700 mb-4">
          Excluir Foto
        </h2>

        <p className="text-zinc-600 mb-8">
          Deseja realmente excluir a foto
          <strong> "{foto?.titulo}" </strong>?
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