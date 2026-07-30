import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardDashboardConvidadosProps {
  titulo: string;
  descricao: string;
  quantidade: number;
  quantidades: number;
  detalhe: string;
  detalhes: string;
  icone: ReactNode;
  rota: string;
}
interface CardDashboardProps {
  titulo: string;
  descricao: string;
  quantidade: number;
 
  detalhe: string;

  icone: ReactNode;
  rota: string;
}

export default function CardDashboard({
  titulo,
  descricao,
  quantidade,
  
  detalhe,
 
  icone,
  rota,
}: CardDashboardProps) {
  return (
    <article className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
        <div className="flex justify-center items-center gap-3 sm:gap-4 text-violet-700 mb-4 sm:mb-6 flex-col">
          <div className="text-3xl sm:text-4xl lg:text-5xl">{icone}</div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
            {titulo}
          </h2>
        </div>
        <p className="mt-2 sm:mt-4 cor-texto text-xs sm:text-sm lg:text-base">
          {descricao}
        </p>
        <p className="mt-2 sm:mt-4 cor-texto font-bold text-lg sm:text-xl lg:text-2xl">
          {quantidade}
        </p>
        <p className="mt-2 sm:mt-4 cor-texto text-xs sm:text-sm lg:text-base flex-1">
          {detalhe}
        </p>
        <div className="flex justify-center mt-4 sm:mt-6">
          <Link
            to={rota}
            className="botao-confirma mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base"
          >
            Acessar
          </Link>
        </div>
      </div>
    </article>
  );
}

export  function CardDashboardConvidados({
 titulo,
  descricao,
  quantidade,
  quantidades,
  detalhe,
  detalhes,
  icone,
  rota,
}: CardDashboardConvidadosProps){
  return (
     <article className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
        <div className="flex justify-center items-center gap-3 sm:gap-4 text-violet-700 mb-4 sm:mb-6 flex-col">
          <div className="text-3xl sm:text-4xl lg:text-5xl">{icone}</div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
            {titulo}
          </h2>
        </div>
        <p className="mt-2 sm:mt-4 cor-texto text-xs sm:text-sm lg:text-base">
          {descricao}
        </p>
        <p className="mt-2 sm:mt-4 cor-texto font-bold text-lg sm:text-xl lg:text-2xl">
          {quantidade}
        </p>
        <p className="mt-2 sm:mt-4 cor-texto text-xs sm:text-sm lg:text-base flex-1">
          {detalhe}
        </p>
             <p className="mt-2 sm:mt-4 cor-texto font-bold text-lg sm:text-xl lg:text-2xl">
          {quantidades}
        </p>
        <p className="mt-2 sm:mt-4 cor-texto text-xs sm:text-sm lg:text-base flex-1">
          {detalhes}
        </p>
        <div className="flex justify-center mt-4 sm:mt-6">
          <Link
            to={rota}
            className="botao-confirma mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base"
          >
            Acessar
          </Link>
        </div>
      </div>
    </article>
  )
}