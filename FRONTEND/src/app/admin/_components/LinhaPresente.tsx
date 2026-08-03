import { Pencil, Trash2 } from "lucide-react";
import type { Presente } from "../../shared/types/Presente";

interface LinhaPresenteProps {
  presente: Presente;
  onEditar: (presente: Presente) => void;
  onExcluir: (presente: Presente) => void;
}

export default function LinhaPresente({
  presente,
  onEditar,
  onExcluir,
}: LinhaPresenteProps) {

  return (
    <tr className="border-b hover:bg-violet-50 transition">

      <td className="p-5">

        <div className="flex items-center gap-4">

          {presente.imagem ? (
    <img
        src={presente.imagem}
        alt={presente.nome}
        className="w-16 h-16 rounded-xl object-cover"
    />
) : (
    <div className="w-16 h-16 rounded-xl bg-zinc-200 flex items-center justify-center text-xs">
        Sem foto
    </div>
)}
          <span className="font-medium">
            {presente.nome}
          </span>

        </div>

      </td>

      

      <td className="text-center">

        {presente.reservado ? (

<div className="flex flex-col">

<span className="px-3 py-1 rounded-full bg-red-100 text-red-700">
Reservado
</span>

<span className="text-xs mt-1">
{presente.reservador}
</span>

</div>

) : (

          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
            Disponível
          </span>

        )}

      </td>

      <td>

        <div className="flex justify-center gap-4">

          <button
            className="text-blue-600 hover:scale-110 transition"
            title="Editar"
            onClick={() => onEditar(presente)}
          >
            <Pencil size={20} />
          </button>

          <button
            className="text-red-600 hover:scale-110 transition"
            title="Excluir"
            onClick={() => onExcluir(presente)}
          >
            <Trash2 size={20} />
          </button>

        </div>

      </td>

    </tr>
  );
}