import { X } from "lucide-react";
import type { Mensagem } from "../../shared/types/Mensagem";

interface ModalMensagemProps {
  aberto: boolean;
  mensagem?: Mensagem;
  onClose: () => void;
}

export default function ModalMensagem({
  aberto,
  mensagem,
  onClose,
}: ModalMensagemProps) {

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-zinc-700">
            Mensagem do Convidado
          </h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>

        </div>

        <div className="space-y-6">

          <div>

            <h3 className="text-sm text-zinc-500">
              Nome
            </h3>

            <p className="text-xl font-semibold">
              {mensagem?.nome}
            </p>

          </div>

          <div>

            <h3 className="text-sm text-zinc-500">
              Data
            </h3>

            <p>
              {mensagem?.createdAt}
            </p>

          </div>

          <div>

            <h3 className="text-sm text-zinc-500 mb-2">
              Mensagem
            </h3>

            <div className="bg-zinc-100 rounded-2xl p-5 leading-7">

              {mensagem?.texto}

            </div>

          </div>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="botao-confirma"
          >
            Fechar
          </button>

        </div>

      </div>

    </div>
  );
}