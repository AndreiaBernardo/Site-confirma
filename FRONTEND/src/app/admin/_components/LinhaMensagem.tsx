import { Eye, Trash2 } from "lucide-react";
import type { Mensagem } from "../../shared/types/Mensagem";

interface LinhaMensagemProps {
  mensagem: Mensagem;
  onVisualizar: (mensagem: Mensagem) => void;
  onExcluir: (mensagem: Mensagem) => void;
}

export default function LinhaMensagem({
  mensagem,
  onVisualizar,
  onExcluir,
}: LinhaMensagemProps) {

  return (
    <tr className="border-b hover:bg-violet-50 transition">

      <td className="p-5 font-medium">
        {mensagem.nome}
      </td>

      <td>
        {mensagem.texto.length > 40
          ? mensagem.texto.substring(0, 40) + "..."
          : mensagem.texto}
      </td>

      <td className="text-center">
        {mensagem.data}
      </td>

      <td>

        <div className="flex justify-center gap-4">

          <button
            onClick={() => onVisualizar(mensagem)}
            className="text-blue-600 hover:scale-110 transition"
            title="Visualizar"
          >
            <Eye size={20} />
          </button>

          <button
            onClick={() => onExcluir(mensagem)}
            className="text-red-600 hover:scale-110 transition"
            title="Excluir"
          >
            <Trash2 size={20} />
          </button>

        </div>

      </td>

    </tr>
  );
}