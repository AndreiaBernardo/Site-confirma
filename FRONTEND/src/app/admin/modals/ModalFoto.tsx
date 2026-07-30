import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Foto } from "../../shared/types/Foto";

interface ModalFotoProps {
  aberto: boolean;
  onClose: () => void;
  onSalvar: (
    foto:FotoFormulario
  ) => Promise<void>;
  foto?: Foto;
}

interface FotoFormulario extends Foto {
  arquivoImagem?: File | null;
}

const fotoInicial: Foto = {
  id: 0,
  titulo: "",
  imagem: "",
};

export default function ModalFoto({
  aberto,
  onClose,
  onSalvar,
  foto,
}: ModalFotoProps) {

  const [formulario, setFormulario] = useState(fotoInicial);

  const [arquivoImagem, setArquivoImagem] =
  useState<File | null>(null);

 

 

 async function salvar() {

  await onSalvar({

    ...formulario,

    id: foto?.id ?? 0,

    arquivoImagem,

  });

  onClose();

}

useEffect(() => {

    if (!aberto) return;

    setFormulario(foto ?? fotoInicial);

  }, [aberto, foto]);

  if (!aberto) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold text-zinc-700">

            {foto ? "Editar Foto" : "Nova Foto"}

          </h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>

        </div>

        <div className="space-y-6">

          <div>

            <label className="block mb-2 font-medium">
              Título
            </label>

            <input
              className="input w-full"
              value={formulario.titulo}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  titulo: e.target.value,
                })
              }
            />

          </div>

          <div>

  <label className="block mb-2 font-medium">
    Imagem
  </label>

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

</div>

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-xl hover:bg-zinc-100"
          >
            Cancelar
          </button>

          <button
            className="botao-confirma"
            onClick={salvar}
          >
            {foto ? "Salvar Alterações" : "Salvar Foto"}
          </button>

        </div>

      </div>

    </div>
  );
}