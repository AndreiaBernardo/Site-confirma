import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { listarFotos } from "../../../services/foto.service";
import type { Foto } from "../../shared/types/Foto";

export default function CarrosselFotos() {
  const [imagemAtual, setImagemAtual] = useState(0);
  const [fotos, setFotos] = useState<Foto[]>([]);

  async function carregarFotos() {
    try {
      const dados = await listarFotos();

    
      setFotos(dados);
    } catch (error) {
      console.error(error);
    }
  }

  function proximaImagem() {
    setImagemAtual((indiceAtual) => {
      if (indiceAtual === fotos.length - 1) {
        return 0;
      }
      return indiceAtual + 1;
    });
  }

  function imagemAnterior() {
    setImagemAtual((indiceAtual) => {
      if (indiceAtual === 0) {
        return fotos.length - 1;
      }
      return indiceAtual - 1;
    });
  }

  useEffect(() => {
  carregarFotos();
}, []);

useEffect(() => {
  if (fotos.length === 0) return;

  const intervalo = setInterval(() => {
    setImagemAtual((indiceAtual) =>
      indiceAtual === fotos.length - 1
        ? 0
        : indiceAtual + 1
    );
  }, 4000);

  return () => clearInterval(intervalo);

}, [fotos]);

  if (fotos.length === 0) {
    return (
      <section className="py-10 text-center text-zinc-500">
        Nenhuma foto cadastrada.
      </section>
    );
  }

  return (
    <section className="py-6 sm:py-8 lg:py-10 px-4">
      <div className="container">
        <div className="relative w-full mx-auto group">
          <img
  src={fotos[imagemAtual]?.imagem}
  alt={fotos[imagemAtual]?.titulo}
  className="block w-150 justify-centeri  itens-center mx-auto sm:h-80 lg:h-96 xl:h-[600px] object-cover rounded-2xl sm:rounded-3xl shadow-xl"
/>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={imagemAnterior}
              className="absolute left-2 sm:left-4 lg:-left-8 top-1/2 translate-y-1/2 bg-white/80 text-violet-700 rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 shadow-lg backdrop-blur-sm flex items-center justify-center opacity-0 hover:bg-violet-700 hover:text-white transition-opacity duration-300 group-hover:opacity-100"
            >
              <ChevronLeft size={20} className="sm:size-6 lg:size-9" />
            </button>

            <button
              onClick={proximaImagem}
              className="absolute right-2 sm:right-4 lg:-right-8 top-1/2 translate-y-1/2 bg-white/80 text-violet-700 rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 shadow-lg backdrop-blur-sm flex items-center justify-center opacity-0 hover:bg-violet-700 hover:text-white transition-opacity duration-300 group-hover:opacity-100"
            >
              <ChevronRight size={20} className="sm:size-6 lg:size-9" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        {fotos.map((_, indice) => (
          <button
            key={indice}
            onClick={() => setImagemAtual(indice)}
            className={`rounded-full transition-all ${
              indice === imagemAtual
                ? "w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-violet-700"
                : "w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
