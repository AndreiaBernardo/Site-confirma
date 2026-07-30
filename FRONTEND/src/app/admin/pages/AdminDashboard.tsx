
import { useEffect, useState } from "react";
import {
  Users,
  Gift,
  Home,
  MessageCircleHeart,
} from "lucide-react";

import CardDashboard, {CardDashboardConvidados} from "../_components/CardDashboard";

import {
  buscarDashboard,
  type Dashboard,
} from "../../../services/dashboard.service";

export default function AdminDashboard() {

  const [dados, setDados] = useState<Dashboard>({
    foto: 0,
    convidados: 0,
    confirmados: 0,
    presentesReservados: 0,
    mensagens: 0,
  });

  async function carregarDashboard() {

    try {

      const dashboard = await buscarDashboard();

      setDados(dashboard);

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    carregarDashboard();

  }, []);

  return (

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">

      <CardDashboardConvidados
        titulo="Convidados"
        descricao="Gerencie as confirmações de presença."
        quantidade={dados.confirmados}
        detalhe={`${dados.confirmados} confirmados`}
        quantidades={dados.convidados}
        detalhes={`${dados.convidados} convidados cadastrados`}
        icone={<Users size={55} />}
        rota="/admin/convidados"
      />

      <CardDashboard
        titulo="Mensagens"
        descricao="Visualize as mensagens recebidas."
        quantidade={dados.mensagens}
        detalhe={`${dados.mensagens} mensagens recebidas`}
        icone={<MessageCircleHeart size={55} />}
        rota="/admin/mensagens"
      />

      <CardDashboard
        titulo="Presentes"
        descricao="Cadastre e edite a lista de presentes."
        quantidade={dados.presentesReservados}
        detalhe={`${dados.presentesReservados} reservados`}
        icone={<Gift size={55} />}
        rota="/admin/presentes"
      />

      <CardDashboard
        titulo="Galeria"
        descricao="Fotos cadastradas na galeria."
        quantidade={dados.foto}
        detalhe={`${dados.foto} foto cadastradas`}
        icone={<Home size={55} />}
        rota="/admin/galeria"
      />

    </section>

  );

}