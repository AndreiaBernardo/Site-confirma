import { useState } from "react";
import { X } from "lucide-react";

interface ModalReservarPresenteProps {
  aberto: boolean;
  onClose: () => void;
  onConfirmar: (nome: string) => void;
}

export default function ModalReservarPresente({
  aberto,
  onClose,
  onConfirmar,
}: ModalReservarPresenteProps) {

  const [nome, setNome] = useState("");

  if (!aberto) return null;

  function confirmar() {

    if (!nome.trim()) {
      alert("Informe seu nome.");
      return;
    }

    onConfirmar(nome);

    setNome("");

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-zinc-700">
            Reservar Presente
          </h2>

          <button onClick={onClose}>
            <X size={28}/>
          </button>

        </div>

        <p className="text-zinc-500 mb-4">
          Informe seu nome para reservar este presente.
        </p>

        <input
          className="input w-full"
          placeholder="Seu nome"
          value={nome}
          onChange={(e)=>setNome(e.target.value)}
        />

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-xl hover:bg-zinc-100"
          >
            Cancelar
          </button>

          <button
            className="botao-confirma"
            onClick={confirmar}
          >
            Confirmar
          </button>

        </div>

      </div>

    </div>
  );
}