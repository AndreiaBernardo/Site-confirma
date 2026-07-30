
import { Plus, Search } from "lucide-react";
import TabelaFamilias from "../_components/TabelaFamilias";
import ModalFamilia from "../modals/ModalFamilia";
import { useState, useEffect } from "react";
import type { Familia } from "../../shared/types/Familia";
import ModalExcluirFamilia from "../modals/ModalExcluirFamilia";
import { listarFamilias, criarFamilia, atualizarFamilia,
  excluirFamilia, buscarFamilia } from "../../../services/familia.service";
import ModalDetalhesFamilia from "../modals/ModalDetalhesFamilia";




export default function AdminConvidados() {

  const [familiaEditando, setFamiliaEditando] = useState<Familia | undefined>();
  const [modalAberto, setModalAberto] = useState(false);

  const [familiaExcluindo, setFamiliaExcluindo] = useState<Familia | undefined>();

  const[pesquisa, setPesquisa] = useState("");

const [familias, setFamilias] = useState<Familia[]>([]);

const [modalDetalhes, setModalDetalhes] = useState(false);

const [familiaDetalhes, setFamiliaDetalhes] =
  useState<Familia | undefined>();

 
const familiasFiltradas = familias.filter((familia) =>
  familia.nome.toLowerCase().includes(pesquisa.toLowerCase())
);

const carregarFamilias = async () => {
   try {
    const dados = await listarFamilias();
    setFamilias(dados);
  } catch (error) {
    console.error(error);
  }
};

async function adicionarFamilia(familia: Familia) {

  try {

    if (familiaEditando) {

      await atualizarFamilia(
        familia.id,
        {
          nome: familia.nome,
          senha: familia.senha,
          convidados: familia.convidados.map(c => c.nome),
        }
      );

    } else {

      await criarFamilia({
        nome: familia.nome,
        senha: familia.senha,
        convidados: familia.convidados.map(c => c.nome),
      });

    }

    await carregarFamilias();

    setFamiliaEditando(undefined);

    setModalAberto(false);

  } catch (error) {

    console.error(error);

  }

}



function editarFamilia(familia: Familia) {
  setFamiliaEditando(familia);
  setModalAberto(true);
}


function abrirExcluirFamilia(familia: Familia) {
  setFamiliaExcluindo(familia);
}

async function visualizarFamilia(familia: Familia) {

  try {

    const dados = await buscarFamilia(familia.id);

    setFamiliaDetalhes(dados);

    setModalDetalhes(true);

  } catch (error) {

    console.error(error);

  }

}

async function confirmarExcluirFamilia() {

  if (!familiaExcluindo) return;

  try {

    await excluirFamilia(familiaExcluindo.id);

    await carregarFamilias();

    setFamiliaExcluindo(undefined);

  } catch (error) {

    console.error(error);

  }

}

useEffect(() => {
 carregarFamilias();
}, []);
 

  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-700">
            Gerenciar Famílias
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-zinc-500 mt-2">
            Cadastre, edite e acompanhe as famílias convidadas.
          </p>
        </div>

        <button
          className="botao-confirma flex items-center gap-2 text-sm sm:text-base"
          onClick={() => {
            setFamiliaEditando(undefined);
            setModalAberto(true)}}
        >
          <Plus size={20} />
          Nova Família
        </button>
      </div>

      <div className="relative max-w-md">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
        />

        <input
          type="text"
          placeholder="Pesquisar família..."
          className="input pl-12 w-full"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
      </div>

      <TabelaFamilias familias={familiasFiltradas} 
      onEditar={editarFamilia}
      onExcluir={abrirExcluirFamilia}
      onVisualizar={visualizarFamilia}
   
       />

      <ModalFamilia
        aberto={modalAberto}
        onClose={() =>{setModalAberto(false)
        setFamiliaEditando(undefined)
        }}
        onSalvar={adicionarFamilia}
        familia={familiaEditando}
        

      />

      <ModalExcluirFamilia
        aberto={!!familiaExcluindo}
        familia={familiaExcluindo}
        onCancelar={() => setFamiliaExcluindo(undefined)}
        onConfirmar={confirmarExcluirFamilia}
      />

      <ModalDetalhesFamilia
  aberto={modalDetalhes}
  familia={familiaDetalhes}
  onClose={() => {
    setModalDetalhes(false);
    setFamiliaDetalhes(undefined);
  }}
/>

    </section>
  );
}
