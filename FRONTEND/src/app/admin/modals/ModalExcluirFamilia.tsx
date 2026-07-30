import type { Familia } from "../../shared/types/Familia";

interface ModalExcluirFamiliaProps {
  aberto: boolean;
  familia?: Familia;
  onCancelar: () => void;
  onConfirmar: () => void;
}

export default function ModalExcluirFamilia({
  aberto,
  familia,
  onCancelar,
  onConfirmar,
}: ModalExcluirFamiliaProps) {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold text-center text-red-600">
          Excluir Família
        </h2>

        <p className="text-center mt-6 text-zinc-600">
          Deseja realmente excluir a família
        </p>

        <p className="text-center font-bold text-xl mt-2">
          {familia?.nome}?
        </p>

        <p className="text-center text-sm text-zinc-500 mt-4">
          Esta ação não poderá ser desfeita.
        </p>

        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={onCancelar}
            className="px-6 py-2 rounded-xl border border-zinc-300 hover:bg-zinc-100 transition"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirmar}
            className="px-6 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
          >
            Excluir
          </button>

        </div>

      </div>

    </div>
  );
}