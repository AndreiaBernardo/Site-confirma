import CardPresente from "../_components/CardPresente";

import { listarPresentes, reservarPresenteAPI } from "../../../services/presente.sevice";
import { useState, useEffect } from "react";

import type { Presente } from "../../shared/types/Presente";
import ModalReservarPresente from "../../admin/modals/ModalReservarPresente";

export default function Presentes() {
  const [presentes, setPresentes] = useState<Presente[]>([]);
  const [modalAberto, setModalAberto] = useState(false);

const [presenteSelecionado, setPresenteSelecionado] =
  useState<Presente | null>(null);

  async function carregarPresentes() {
    try {
      const dados = await listarPresentes();

      

      setPresentes(dados);
    } catch (error) {
      console.error(error);
    }
  }

 function reservarPresente(id: number) {
  const presente = presentes.find((p) => p.id === id);

  if (!presente) return;

  setPresenteSelecionado(presente);

  setModalAberto(true);
}

async function confirmarReserva(nome: string) {

  if (!presenteSelecionado) return;

  try {

    await reservarPresenteAPI(presenteSelecionado.id, nome);

    await carregarPresentes();

    setModalAberto(false);

    setPresenteSelecionado(null);

  } catch (error) {

    console.error(error);

  }

}
  useEffect(() => {
    carregarPresentes();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12 lg:mb-14">
        <h1 className="titulo-principal text-2xl sm:text-3xl lg:text-4xl">
          Lista de Presentes
        </h1>

        <p className="mt-4 sm:mt-6 texto-padrao cor-texto text-sm sm:text-base lg:text-lg px-2">
          Sua presença já é o nosso maior presente.
          <br />
          Caso deseje presentear a debutante, segue algumas sugestões abaixo.
        </p>

        <br />
        <br />

        <p className="mt-4 sm:mt-6 texto-padrao cor-texto text-sm sm:text-base lg:text-lg px-2">🛵OBS: Segue o endereço para entrega dos presentes(caso quiser enviar):
          <br />Endereço para entrega: QR 306 conjunto 15 casa 07
          <br />CEP: 72306-315 Samambaia Sul
        </p>
      </div>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-4
          sm:gap-6
          lg:gap-8
        "
      >
        {presentes.map((presente) => (
          <CardPresente
            key={presente.id}
            nome={presente.nome}
            tamanho={presente.tamanho}
            imagem={presente.imagem}
            link={presente.linkLoja}
            reservado={presente.reservado}
            reservador={presente.reservador}
            onReservar={() => reservarPresente(presente.id)}
          />
        ))}
      </div>
      <ModalReservarPresente
  aberto={modalAberto}
  onClose={() => {
    setModalAberto(false);
    setPresenteSelecionado(null);
  }}
  onConfirmar={confirmarReserva}
/>
    </section>
  );
}
