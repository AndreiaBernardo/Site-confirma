import { useState } from "react";
import TabelaMensagens from "../_components/TabelaMensagens";
import { Search } from "lucide-react";

import ModalMensagem from "../modals/ModalMensagem";
import ModalExcluirMensagem from "../modals/ModalExcluirMensagem";
import type { Mensagem } from "../../shared/types/Mensagem";
import { useEffect } from "react";

import {
  listarMensagens,
  excluirMensagem,
} from "../../../services/mensagem.service";

export default function AdminMensagens() {

  const [mensagens, setMensagens] = useState<Mensagem[]>([]);

const [pesquisa, setPesquisa] = useState("");

const [mensagemSelecionada, setMensagemSelecionada] =
  useState<Mensagem | undefined >();

const [modalMensagemAberto, setModalMensagemAberto] =
  useState(false);

const [modalExcluirAberto, setModalExcluirAberto] =
  useState(false);

  const mensagensFiltradas = mensagens.filter((mensagem) =>
  mensagem.nome
    .toLowerCase()
    .includes(pesquisa.toLowerCase())
);

async function carregarMensagens() {

  try {

    const dados = await listarMensagens();

    setMensagens(dados);

  } catch (error) {

    console.error(error);

  }

}

useEffect(() => {

  carregarMensagens();

}, []);

function visualizarMensagem(mensagem: Mensagem) {
  setMensagemSelecionada(mensagem);
  setModalMensagemAberto(true);
}

function abrirExcluirMensagem(mensagem: Mensagem) {
  setMensagemSelecionada(mensagem);
  setModalExcluirAberto(true);
}

async function confirmarExclusao() {

  if (!mensagemSelecionada) return;

  try {

    await excluirMensagem(mensagemSelecionada.id);

    await carregarMensagens();

    setModalExcluirAberto(false);

    setMensagemSelecionada(undefined);

  } catch (error) {

    console.error(error);

  }

}
  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-700">
            Gerenciar Mensagens
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-zinc-500 mt-2">
            Visualizar, editar e excluir mensagens.
          </p>
        </div>
        <div className="relative max-w-md">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />
        
                <input
                  type="text"
                  placeholder="Pesquisar mensagem..."
                  className="input pl-12 w-full"
                  value={pesquisa}
                  onChange={(e) => setPesquisa(e.target.value)}
                />
              </div>
      </div>


               <TabelaMensagens mensagens={mensagensFiltradas} 
                    onVisualizar={visualizarMensagem}
                    onExcluir={abrirExcluirMensagem}
                 
                     />
              
                    <ModalMensagem
                      aberto={modalMensagemAberto}
                      mensagem={mensagemSelecionada}
                      onClose={() =>{setModalMensagemAberto(false)
                    
                      }}
                     
                     
                      
              
                    />
              
                    <ModalExcluirMensagem
                      aberto={modalExcluirAberto}
                      mensagem={mensagemSelecionada}
                      onClose={() => {setModalExcluirAberto(false);
                        setMensagemSelecionada(undefined)
                      }}
                      onConfirmar={confirmarExclusao}
                    />
      
    </section>
  );
}
