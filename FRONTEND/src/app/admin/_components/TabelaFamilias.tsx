
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
    <>
     <p className="md:hidden text-center text-sm text-gray-500 mb-3">
        👈 Deslize para visualizar todas as colunas
      </p>

    <div className="bg-white rounded-3xl shadow-lg overflow-x-auto">

      <table className="w-full min-w-[850px]">

        <thead className="bg-violet-700 text-white">

          <tr>

            <th className="text-left p-5 ">
              Família
            </th>

            <th className="text-center p-3">
              Senha
            </th>

            <th className="text-center">
              Convidados
            </th>

            <th className="text-center">
              Confirmados
            </th>

            <th className="text-center ">
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
    </>
  );
}