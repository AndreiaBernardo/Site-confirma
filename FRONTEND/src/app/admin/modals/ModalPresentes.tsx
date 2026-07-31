import { useEffect, useState } from "react";
import type { Presente } from "../../shared/types/Presente";
import { X } from "lucide-react";

interface PresenteFormulario extends Presente {
  arquivoImagem?: File | null;
}

interface ModalPresenteProps {
  aberto: boolean;
  onClose: () => void;
  onSalvar: (presente: PresenteFormulario) => Promise<void>;
  presente?: Presente;
}



export default function ModalPresente({
  aberto,
  onClose,
  onSalvar,
  presente,
}: ModalPresenteProps) {
  const formularioInicial: Presente = {
    id: 0,
    nome: "",
    tamanho: "",
    imagem: "",
    linkLoja: "",
    reservado: false,
    reservador: null,
  };

  const [formulario, setFormulario] = useState(formularioInicial);

  const [arquivoImagem, setArquivoImagem] =
  useState<File | null>(null);

  

useEffect(() => {

  if (presente) {

    setFormulario(presente);

  } else {

    setFormulario(formularioInicial);

  }

  setArquivoImagem(null);

}, [presente, aberto]);
 

async function salvar() {

  await onSalvar({

    ...formulario,

    id: presente?.id ?? 0,

    arquivoImagem,

  } );

  onClose();

}

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-zinc-700">
            {presente ? "Editar Presente" : "Novo Presente"}
          </h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        <div className="space-y-5">
          <label className="block mb-2 font-medium">Nome do Presente</label>

          <input
            className="input w-full"
            placeholder="Ex.: Vestido"
            value={formulario.nome}
            onChange={(e) =>
              setFormulario({ ...formulario, nome: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Tamanho</label>

          <input
            className="input w-full"
            value={formulario.tamanho ?? ""}
            onChange={(e) =>
              setFormulario({
                ...formulario,
                tamanho: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">URL da imagem</label>

         <input
  type="file"
  accept="image/*"
  onChange={(e) => {

    const arquivo =
      e.target.files?.[0];

    if (!arquivo) return;

    setArquivoImagem(arquivo);

    setFormulario({

      ...formulario,

      imagem: URL.createObjectURL(arquivo),

    });

  }}
/>

          {formulario.imagem && (
            <img
              src={formulario.imagem}
              alt="Pré-visualização"
              className="w-36 h-36 rounded-xl object-cover mt-4"
            />
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">Link da loja</label>

          <input
            className="input w-full"
            value={formulario.linkLoja}
            onChange={(e) =>
              setFormulario({ ...formulario, linkLoja: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-10">
        <button
          className="px-6 py-2 border rounded-xl hover:bg-zinc-100"
          onClick={onClose}
        >
          Cancelar
        </button>

        <button
          
          className="botao-confirma"
          onClick={salvar}
        >
          {presente
  ? "Salvar Alterações"
  : "Salvar Presente"}
        </button>
      </div>
    </div>
  );
}
