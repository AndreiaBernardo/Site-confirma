import { X } from "lucide-react";
import type { Familia } from "../../shared/types/Familia";

interface ModalDetalhesFamiliaProps {
  aberto: boolean;
  familia?: Familia;
  onClose: () => void;
}

export default function ModalDetalhesFamilia({
  aberto,
  familia,
  onClose,
}: ModalDetalhesFamiliaProps) {

  if (!aberto || !familia) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-3xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Família {familia.nome}
          </h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>

        </div>

        <div className="space-y-4">

          {familia.convidados.map((convidado) => (

            <div
              key={convidado.id}
              className="flex justify-between items-center border rounded-xl p-4"
            >

              <span className="font-medium">
                {convidado.nome}
              </span>

              <span>

                {convidado.confirmado === true && (
                  <span className="text-green-600 font-semibold">
                    ✔ Vai participar
                  </span>
                )}

                {convidado.confirmado === false && (
                  <span className="text-red-600 font-semibold">
                    ❌ Não vai
                  </span>
                )}

                {convidado.confirmado === null && (
                  <span className="text-yellow-600 font-semibold">
                    ⏳ Não respondeu
                  </span>
                )}

              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );

}