import ContadorRegressivo from "../../public/_components/ContadorRegressivo";
import { Link } from "react-router-dom";
import CarrosselFotos from "../../public/_components/CarrosselFotos";
import { CalendarDays, Clock3, MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { criarMensagem } from "../../../services/mensagem.service";

export default function Inicio() {

const [nome, setNome] = useState("");

const [texto, setTexto] = useState("");

const [enviando, setEnviando] = useState(false);

const [mensagemSucesso, setMensagemSucesso] = useState("");

const [mensagemErro, setMensagemErro] = useState("");

async function enviarMensagem(
  e: React.FormEvent
) {

  e.preventDefault();

  try {

    setEnviando(true);
    setMensagemErro("");
setMensagemSucesso("");

    await criarMensagem({

      nome,

      texto,

    });

    setMensagemSucesso(
  "💖 Sua mensagem foi enviada com sucesso! Obrigado pelo carinho com a Gabriela."
);

setNome("");

setTexto("");

setTimeout(() => {
  setMensagemSucesso("");
}, 5000);

  } catch (error) {

    console.error(error);

   setMensagemErro(
  "Não foi possível enviar sua mensagem. Tente novamente."
);

setTimeout(() => {
  setMensagemErro("");
}, 5000);

  } finally {

    setEnviando(false);

  }

}

  return (
    <>
      <section className="text-center py-12">
        <h1 className="titulo-principal tracking-[0.6rem] text-9xl font-bold">
          Gabriela
        </h1>
        <h2 className="text-7xl tracking-[0.4rem] text-blue-950 font-semibold mt-25 font-[--fonte-titulo] ">
          15 anos
        </h2>
      </section>

      <section className="secao  ">
        <CarrosselFotos />
      </section>

      <section className=" secao ">
        <div className=" container">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10 mt-[-80px]  font-[--fonte-titulo] text-blue-950 font-medium">
            <h2 className="text-center mb-4 text-2xl ">
              Uma mensagem especial
            </h2>

            <p className="text-xl text-center  ">
              " Estou muito feliz em compartilhar este momento tão especial da
              minha vida com vocês. A presença de cada um tornará esta noite
              ainda mais inesquecível. Espero celebrar esse sonho ao lado de
              pessoas tão importantes para mim.!!"
            </p>
            <br />
            <p className="text-2xl text-end  ">
              <b>Gabriela💖</b>
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 ">
        <ContadorRegressivo />
       
      </section>

      <section className="text-center ">
        <Link to="/login-familia" className="shadow-lg botao-confirma ">
          Confirmar Presença
        </Link>
      </section>

      <section className="secao  font-[--fonte-titulo]  ">
        <div className="container w-[90%] max-w-6xl mx-auto ">
          <h2 className="text-5xl text-center font-extrabold mb-20 mt-10 text-blue-950">
            Informações da Festa
          </h2>
          <div
            className="
           card "
          >
            <div
              className="card-info
"
            >
              <CalendarDays
                size={45}
                className="mx-auto text-red-700 mb-5"
              />
              <h3 className="font-bold text-xl">Data</h3>
              <p className="mt-2"> 17 de Outubro de 2026</p>
            </div>
            <div
              className="
card-info
"
            >
              <Clock3 size={45} className="mx-auto text-red-700 mb-5" />
              <h3 className="font-bold text-xl">Horas</h3>
              <p className="mt-2"> 20:00</p>
            </div>
            <div
              className="
card-info
"
            >
              <MapPin size={45} className="mx-auto text-red-700 mb-5" />
              <h3 className="font-bold text-xl">Local</h3>
              <p className="mt-2"> Mirante Eventos e Buffet</p>
            </div>
            <div
              className="
card-info
"
            >
              <Navigation size={45} className="mx-auto text-red-700 mb-5" />
              <h3 className="font-bold text-xl">Como chegar</h3>
              <a
                href="https://www.google.com/maps/dir//Mirante+Eventos+e+Buffet,+s%2Fn+Col%C3%B4nia+Agr%C3%ADcola+Samambaia,+quadra+10+conjunto+16+-+Vicente+Pires,+Bras%C3%ADlia+-+DF,+72002-052/@-15.8712465,-48.0704318,2786m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x935a331ab08ce2b1:0x8cd0777243e00609!2m2!1d-48.0510987!2d-15.8111481?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-red-700 hover:underline"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className=" container">
          <div className="bg-white rounded-3xl shadwon-lg p-8 text-blue-950 font-medium ">
            <h2 className="text-center text-4xl mb-8 font-[--fonte-titulo]">
              Deixe sua mensagem
            </h2>

            <form className="flex flex-col gap-6 font-[--fonte-titulo]"
            onSubmit={enviarMensagem}
            >
              <div className="flex flex-col gap-2 ">
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome"
                  className="border rounded-lg w-full p-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem">Mensagem</label>

                <textarea
                  id="mensagem"
                  rows={6}
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  placeholder="Escreva aqui sua mensagem"
                  className="border rounded-lg p-3 w-full"
                />
              </div>

              {mensagemSucesso && (
  <div className="bg-green-100 border border-green-300 text-green-700 rounded-xl p-4 text-center font-medium">
    {mensagemSucesso}
  </div>
)}

{mensagemErro && (
  <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4 text-center font-medium">
    {mensagemErro}
  </div>
)}

             <button
  type="submit"
  disabled={enviando}
  className="botao-confirma"
>
  {enviando ? "Enviando..." : "Enviar"}
</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
