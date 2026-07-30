import { CircleCheckBig, Heart } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function ConfirmacaoFinal() {
  const location = useLocation();

  const vaiParticipar = location.state?.vaiParticipar ?? false;

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 text-center w-full max-w-2xl">
        {vaiParticipar ? (
          <Heart className="mx-auto text-violet-700 mb-4 sm:mb-6 lg:mb-8 size-16 sm:size-20 lg:size-28" />
        ) : (
          <CircleCheckBig className="mx-auto text-violet-700 mb-4 sm:mb-6 lg:mb-8 size-16 sm:size-20 lg:size-28" />
        )}
        <h1 className="titulo-principal text-xl sm:text-2xl lg:text-3xl font-bold break-words">
          {vaiParticipar ? "Confirmação registrada!" : "Resposta registrada!"}
        </h1>

        {vaiParticipar ? (
          <p className="texto-padrao text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 lg:mt-8 leading-relaxed cor-texto">
            Obrigado por responder ao convite
            <br />
            <br />
            Estamos muito felizes em compartilhar esse momento tão especial com
            vocês. <br />
            <br />
            Sua presença tornará esse dia ainda mais inesquecível.💜
          </p>
        ) : (
          <p className="texto-padrao text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 lg:mt-8 leading-relaxed cor-texto">
            Agradecemos por responder ao nosso convite.
            <br />
            <br />
            Sentiremos a falta de vocês neste momento tão especial, mas
            agradecemos por nos avisarem.
            <br />
            <br />
            Desejamos muita felicidade e esperamos encontrá-los em uma próxima
            oportunidade.
          </p>
        )}

        <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center">
          {vaiParticipar ? (
            <Link
              to="/presentes"
              className="botao-confirma text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Ir para Lista de Presentes
            </Link>
          ) : (
            <Link
              to="/"
              className="botao-confirma text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Voltar ao Início
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
