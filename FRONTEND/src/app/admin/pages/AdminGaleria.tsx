import { useState } from "react";
import type { Foto } from "../../shared/types/Foto";
import ModalFoto from "../modals/ModalFoto";
import ModalExcluirFoto from "../modals/ModalExcluirFoto";
import { useEffect } from "react";
import {
  listarFotos,
  criarFoto,
  excluirFoto,
} from "../../../services/foto.service";


import GridGaleria from "../_components/GridGaleria";
import { Plus } from "lucide-react";

interface FotoFormulario extends Foto {
  arquivoImagem?: File | null;
}

export default function AdminGaleria() {

  const [fotos, setFotos] = useState<Foto[]>([]);

const [modalAberto, setModalAberto] = useState(false);

const [fotoEditando, setFotoEditando] =
useState<Foto>();

const [modalExcluirAberto, setModalExcluirAberto] =
useState(false);

const [fotoExcluir, setFotoExcluir] =
useState<Foto>();

async function carregarFotos() {
  try {
    const dados = await listarFotos();

    setFotos(dados);
  } catch (error) {
    console.error(error);
  }
}

async function salvarFoto(
  foto: FotoFormulario,
  
) {
  try {
   await criarFoto({
  titulo: foto.titulo,
  arquivoImagem: foto.arquivoImagem,
});

    await carregarFotos();

    setModalAberto(false);

    setFotoEditando(undefined);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  carregarFotos();
}, []);


 

function editarFoto(foto: Foto) {

  setFotoEditando(foto);

  setModalAberto(true);

}

function abrirExcluirFoto(foto: Foto) {

  setFotoExcluir(foto);

  setModalExcluirAberto(true);

}

async function confirmarExclusao() {

  if (!fotoExcluir) return;

  try {

    await excluirFoto(fotoExcluir.id);

    await carregarFotos();

    setModalExcluirAberto(false);

    setFotoExcluir(undefined);

  } catch (error) {

    console.error(error);

  }

}



  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-700">
            Galeria
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-zinc-500 mt-2">
            Editar e excluir as fotos da galeria.
          </p>
        </div>

        <button
  className="botao-confirma flex items-center gap-2"
  onClick={() => {
    setModalAberto(true);
    setFotoEditando(undefined);
  }}
>
  <Plus size={20} />
  Nova Foto
</button>

      </div>



      <GridGaleria
      fotos={fotos}
      onEditar={editarFoto}
      onExcluir={abrirExcluirFoto}
      />

    <ModalFoto
    aberto={modalAberto}
    foto={fotoEditando}
    onClose={() => {
        setModalAberto(false);
        setFotoEditando(undefined);
    }}
    onSalvar={salvarFoto}
/>

<ModalExcluirFoto
    aberto={modalExcluirAberto}
    foto={fotoExcluir}
    onClose={() => {
        setModalExcluirAberto(false);
        setFotoExcluir(undefined);
    }}
    onConfirmar={confirmarExclusao}
/>
      
    </section>
  );
}
