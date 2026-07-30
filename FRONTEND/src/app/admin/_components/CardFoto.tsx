import { Pencil, Trash2 } from "lucide-react";
import type { Foto } from "../../shared/types/Foto";

interface CardFotoProps {
  foto: Foto;
  onEditar: (foto: Foto) => void;
  onExcluir: (foto: Foto) => void;
}

export default function CardFoto({
  foto,
  onEditar,
  onExcluir,
}: CardFotoProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      <img
  src={foto.imagem}
  alt={foto.titulo}
  className="w-20 h-20 object-cover rounded-lg"
/>

      <div className="p-5">

        <h3 className="text-lg font-semibold text-zinc-700">
          {foto.titulo}
        </h3>

        <div className="flex justify-end gap-4 mt-5">

          <button
            onClick={() => onEditar(foto)}
            className="text-blue-600 hover:scale-110 transition"
          >
            <Pencil size={20} />
          </button>

          <button
            onClick={() => onExcluir(foto)}
            className="text-red-600 hover:scale-110 transition"
          >
            <Trash2 size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}