import type { Foto } from "../../shared/types/Foto";
import CardFoto from "./CardFoto";

interface GridGaleriaProps {
  fotos: Foto[];
  onEditar: (foto: Foto) => void;
  onExcluir: (foto: Foto) => void;
}

export default function GridGaleria({
  fotos,
  onEditar,
  onExcluir,
}: GridGaleriaProps) {

  if (fotos.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-zinc-500">
        Nenhuma foto cadastrada.
      </div>
    );
  }

  
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {fotos.map((foto) => (

        <CardFoto
          key={foto.id}
          foto={foto}
          onEditar={onEditar}
          onExcluir={onExcluir}
        />

      ))}

    </div>
  );
}