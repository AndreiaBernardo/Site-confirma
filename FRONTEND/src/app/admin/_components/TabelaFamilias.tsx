
import LinhaFamilia from "./LinhaFamilia";
import type { Familia } from "../../shared/types/Familia";

interface TabelaFamiliasProps {
  familias: Familia[];
  onEditar:(familia:Familia) => void;
  onExcluir:(familia:Familia) => void;

  onVisualizar: (familia: Familia) => void;
}

 
export default function TabelaFamilias({
  familias,
  onEditar,
  onExcluir,
  onVisualizar,
 
}: TabelaFamiliasProps) {

if (familias.length === 0) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-zinc-500">
      Nenhuma família encontrada.
    </div>
  );
}

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-violet-700 text-white">

          <tr>

            <th className="text-left p-5">
              Família
            </th>

            <th className="text-center">
              Convidados
            </th>

            <th className="text-center">
              Confirmados
            </th>

            <th className="text-center p-5">
              Ações
            </th>

          </tr>

        </thead>

       <tbody>

 
    
 

  {familias.map((familia) => (

    <LinhaFamilia
      key={familia.id}
      familia={familia}
      onEditar={onEditar}
      onExcluir={onExcluir}
      onVisualizar={onVisualizar}
    />

  ))}

</tbody>

      </table>

    </div>
  );
}