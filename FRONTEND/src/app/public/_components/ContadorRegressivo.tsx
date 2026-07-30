import { useEffect, useState } from "react";

export default function ContadorRegressivo() {
  const dataEvento = new Date("2026-09-05T19:00:00");

  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date().getTime();
      const diferenca = dataEvento.getTime() - agora;

      if (diferenca <= 0) {
        clearInterval(intervalo);
        return;
      }

      setTempo({
        dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutos: Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((diferenca % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container  w-[90%] mx-auto max-w-6xl">
      <div className="grid grid-cols-4 gap-6 card">
        <CardTempo valor={tempo.dias} titulo="Dias" />
        <CardTempo valor={tempo.horas} titulo="Horas" />
        <CardTempo valor={tempo.minutos} titulo="Minutos" />
        <CardTempo valor={tempo.segundos} titulo="Segundos" />
      </div>
    </div>
  );
}

function CardTempo({ valor, titulo }: { valor: number; titulo: string }) {
  return (
    <div>
      <div className="card-info text-violet-700 mb-5 shadow-lg rounded-3xl p-6 flex flex-col items-center justify-center">
        <h3 className="text-6xl font-bold">{valor}</h3>
        <p className="text-3xl mt-2">{titulo}</p>
      </div>
    </div>
  );
}
