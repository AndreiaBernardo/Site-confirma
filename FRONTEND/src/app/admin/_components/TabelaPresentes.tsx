import LinhaPresente from "./LinhaPresente";
import type { Presente } from "../../shared/types/Presente";

interface TabelaPresentesProps {
  presentes: Presente[];
  onEditar: (presente: Presente) => void;
  onExcluir: (presente: Presente) => void;
}

export default function TabelaPresentes({
  presentes,
  onEditar,
  onExcluir,
}: TabelaPresentesProps) {

  if (presentes.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-zinc-500">
        Nenhum presente encontrado.
      </div>
    );
  }

  return (
    <>
     <p className="md:hidden text-center text-sm text-gray-500 mb-3">
        👈 Deslize para visualizar todas as colunas
      </p>

    <div className="bg-white rounded-3xl shadow-lg overflow-x-auto">

      <table className="w-full min-w-[900px]">

        <thead className="bg-violet-700 text-white">

          <tr>

            <th className="text-left p-5">
              Presente
            </th>

           

            <th className="text-center">
              Status
            </th>

            <th className="text-center">
              Ações
            </th>

          </tr>

        </thead>

        <tbody>

          {presentes.map((presente) => (

            <LinhaPresente
              key={presente.id}
              presente={presente}
              onEditar={onEditar}
              onExcluir={onExcluir}
            />

          ))}

        </tbody>

      </table>

    </div>
    </>
  );
}