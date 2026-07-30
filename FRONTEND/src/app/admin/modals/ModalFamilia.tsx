/* eslint-disable react-hooks/set-state-in-effect */
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import type { Familia } from "../../shared/types/Familia";
import type { Convidado } from "../../shared/types/Convidado";

interface ModalFamiliaProps {
  aberto: boolean;
  onClose: () => void;
  onSalvar:(familia: Familia ) => void;
  familia?: Familia;
}

export default function ModalFamilia({
  aberto,
  onClose,
  onSalvar,
  familia,
}: ModalFamiliaProps) {

const editando = !!familia
const [nomeFamilia, setNomeFamilia] = useState<string>("");
const [senha, setSenha] = useState("");
const [quantidade, setQuantidade] = useState(1);
const [convidados, setConvidados] = useState<string[]>([""]);
const [erroNome, setErroNome] = useState("");
const [erroSenha, setErroSenha] = useState("");
const [erroConvidados, setErroConvidados] = useState("");

useEffect(() => {

  if (familia) {

    setNomeFamilia(familia.nome);

    setSenha(familia.senha);

    setQuantidade(familia.convidados.length);

    setConvidados(
      familia.convidados.map((convidado) => convidado.nome)
    );

  } else {

    setNomeFamilia("");

    setSenha("");

    setQuantidade(1);

    setConvidados([""]);

    setErroNome("");
    setErroSenha("");
    setErroConvidados("");


  }

}, [familia]);

function alterarQuantidade(valor: number) {

  setQuantidade(valor);

  setConvidados(
    Array.from(
      { length: valor },
      (_, index) => convidados[index] ?? ""
    )
  );

}

function alterarNomeFamilia(nome: string) {
  setNomeFamilia(nome);

  if(erroNome) {
    setErroNome("");
  }
}

function alterarSenha(senha: string) {

  setSenha(senha);


    if(erroSenha){
  setErroSenha("");

}
}

function alterarConvidado(index: number, nome: string) {
  const lista = [...convidados];

  lista[index] = nome;

  setConvidados(lista);

  if (erroConvidados) {
    setErroConvidados("");
  }
}

function salvarFamilia(e: React.FormEvent) {
  e.preventDefault();
  if(!nomeFamilia.trim()){
    setErroNome("Informe nome da família.");
    return;
  }

  if(!senha.trim()){
    setErroSenha("Informe a senha.");
    return;
  }

  if(convidados.some((nome) => nome.trim() === "")){  
    setErroConvidados("Preencha todos os convidados");
    return;
    }

 const listaConvidados: Convidado[] =
convidados.map((nome, index) => ({

id:

familia?.convidados[index]?.id ??

index + 1,

nome,

confirmado:

familia?.convidados[index]?.confirmado ??

null,

}));

const familiaSalva: Familia = {
  id: familia?.id ?? Date.now(),
  nome: nomeFamilia,
  senha,
  convidados: listaConvidados,
};

onSalvar(familiaSalva);

    setNomeFamilia("");
    setSenha("");
    setQuantidade(1);
    setConvidados([""]);
    setErroNome("");
    setErroSenha("");
    setErroConvidados("");


    onClose();
}



  if (!aberto) return null;
  


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl p-8">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold text-zinc-700">
            {editando 
            ? "Editar Família" 
            : "Nova Família"}
          </h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>

        </div>

        <form className="space-y-6" onSubmit={salvarFamilia}>

          <div>

            <label>Nome da Família</label>

            <input
              className="input w-full"
              placeholder="Ex.: Oliveira"
                value={nomeFamilia}
                onChange={(e) => alterarNomeFamilia(e.target.value)}
            />
            {erroNome && (
                <p className="text-red-500 text-sm mt-1">{erroNome}</p>
            )}

          </div>

          <div>

            <label>Senha</label>

            <input
              type="password"
              className="input w-full"
              value={senha}
              onChange={(e) => alterarSenha(e.target.value)}
            />
           {erroSenha && (
                <p className="text-red-500 text-sm mt-1">{erroSenha}</p>
            )}


          </div>

          <div>

            <label>Quantidade de convidados</label>

            <input
              type="number"
              className="input w-40"
              min={1}
              value={quantidade}
              onChange={(e) => alterarQuantidade(Number(e.target.value))}
            />
            {erroConvidados && (
                <p className="text-red-500 text-sm mt-1">{erroConvidados}</p>
            )}

          </div>
          <div className="space-y-4">

  <h3 className="text-xl font-semibold">
    Convidados
  </h3>

  {convidados.map((nome, index) => (

    <div key={index}>

      <label>
        Convidado {index + 1}
      </label>

      <input
        type="text"
        value={nome}
       onChange={(e) => alterarConvidado(index, e.target.value)}
        placeholder={`Nome do convidado ${index + 1}`}
        className="input w-full"
      />

    </div>

  ))}

</div>

          <button
            type="submit"
            className="botao-confirma"
          >
            {editando 
            ? "Salvar Alterações"
            : "Salvar Família"}
          </button>

        </form>

      </div>

    </div>
  );
}