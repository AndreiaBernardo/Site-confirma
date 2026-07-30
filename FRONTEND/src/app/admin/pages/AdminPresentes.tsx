import { Plus, Search } from "lucide-react";
import { useState } from "react";
import type { Presente } from "../../shared/types/Presente";
import TabelaPresentes from "../_components/TabelaPresentes";
import ModalPresente from "../modals/ModalPresentes";
import ModalExcluirPresente from "../modals/ModalExcluirPresentes";
import { useEffect } from "react";
import {
  listarPresentes,
  criarPresente,
  editarPresenteAPI,
  excluirPresenteAPI,
} from "../../../services/presente.sevice"


interface PresenteFormulario extends Presente {
  arquivoImagem?: File | null;
}

export default function AdminPresentes() {

const [modalAberto, setModalAberto] = useState(false);

const [presenteEditando, setPresenteEditando] = useState<
  Presente | undefined
>();

  const [presentes, setPresentes] = useState<Presente[]>([]);

  const [pesquisa, setPesquisa] = useState("");

  const presentesFiltrados = presentes.filter((presente) =>
    presente.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);

const [presenteExcluir, setPresenteExcluir] = useState<
  Presente | undefined
>();

const carregarPresentes = async () => {
  try {
    const dados = await listarPresentes();

    setPresentes(dados);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  carregarPresentes();
}, []);

 
async function salvarPresente(presente: PresenteFormulario) {

  try {

    if (presenteEditando) {

      await editarPresenteAPI(presente.id, {
        nome: presente.nome,
    tamanho: presente.tamanho,
    linkLoja: presente.linkLoja,
    reservado: presente.reservado,
    reservador: presente.reservador,
    arquivoImagem: presente.arquivoImagem,
      });

    } else {

      await criarPresente({
  nome: presente.nome,
  tamanho: presente.tamanho,
  linkLoja: presente.linkLoja,
  arquivoImagem: presente.arquivoImagem,
});

    }

    await carregarPresentes();

    setModalAberto(false);

    setPresenteEditando(undefined);

  } catch (error) {

    console.error(error);

  }

}

function editarPresente(presente: Presente) {
  setPresenteEditando(presente);
  setModalAberto(true);
}

function excluirPresente(presente: Presente) {
 setPresenteExcluir(presente);
  setModalExcluirAberto(true)
 
  
}

async function confirmarExclusao() {

  if (!presenteExcluir) return;

  try {

    await excluirPresenteAPI(presenteExcluir.id);

    await carregarPresentes();

    setModalExcluirAberto(false);

    setPresenteExcluir(undefined);

  } catch (error) {

    console.error(error);

  }

}

  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-700">
           Gerenciar Presentes
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-zinc-500 mt-2">
            Cadastre, edite e acompanhe os presentes.
          </p>
        </div>
         <button className="botao-confirma flex gap-2 items-center"
          onClick={() => {setModalAberto(true);
            setPresenteEditando(undefined)
          }}
        >
          <Plus size={20} />
          Novo Presente
        </button>
      </div>

       <div className="relative max-w-md">

        <Search
          size={20}
          className="absolute  top-1/2 -translate-y-1/2 text-zinc-400  "
        />

        <input
          className="input pl-12 w-full"
          placeholder="Pesquisar presente..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />

      </div>

       <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-zinc-500">

        Aqui ficará a tabela de presentes.

        <br />

        Total encontrados: {presentesFiltrados.length}

      </div>

      <TabelaPresentes
  presentes={presentesFiltrados}
  onEditar={editarPresente}
  onExcluir={excluirPresente}
/>

<ModalPresente
  aberto={modalAberto}
  onClose={() => {
    setModalAberto(false);
    setPresenteEditando(undefined);
  }}
  onSalvar={salvarPresente}
  presente={presenteEditando}
/>

<ModalExcluirPresente
  aberto={modalExcluirAberto}
  presente={presenteExcluir}
  onClose={() => {
    setModalExcluirAberto(false);
    setPresenteExcluir(undefined);
  }}
  onConfirmar={confirmarExclusao}
/>
    </section>
  );
}
