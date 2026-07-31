import { Pencil, Trash2, Eye } from "lucide-react";
import type { Familia } from "../../shared/types/Familia";

interface LinhaFamiliaProps {
  familia: Familia;
  onEditar: (familia: Familia) => void;
  onExcluir: (familia: Familia) => void;

  onVisualizar: (familia: Familia) => void;
}

export default function LinhaFamilia({
  familia,
  onEditar,
  onExcluir,
  onVisualizar,
}: LinhaFamiliaProps) {
  const quantidadeConvidados = familia.convidados.length;

  const quantidadeConfirmados = familia.convidados.filter(
    (convidado) => convidado.confirmado === true,
  ).length;

  return (
    <tr className="border-b hover:bg-violet-50 transition">
      <td className="p-5 font-medium">Família {familia.nome}</td>

      <td className="text-center">{familia.senha}</td>

      <td className="text-center">{quantidadeConvidados}</td>

      <td className="text-center">{quantidadeConfirmados}</td>

      <td>
        <div className="flex justify-center gap-4 ">
          <button
            className="text-blue-600 hover:scale-110 transition"
            title="Editar"
            onClick={() => onEditar(familia)}
          >
            
            <Pencil size={20} />
          </button>
<button
              className="text-violet-700 hover:scale-110 transition"
              title="Visualizar"
              onClick={() => onVisualizar(familia)}
            >
              <Eye size={20} />
            </button>
          <button
            className="text-red-600 hover:scale-110 transition"
            title="Excluir"
            onClick={() => onExcluir(familia)}
          >
            <Trash2 size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}
