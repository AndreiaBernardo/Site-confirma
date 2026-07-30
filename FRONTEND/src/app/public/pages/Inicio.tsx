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
  "💜 Sua mensagem foi enviada com sucesso! Obrigado pelo carinho com a Yasmim."
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
          Yasmim
        </h1>
        <h2 className="text-7xl tracking-[0.4rem] text-zinc-600 font-semibold mt-25 font-[--fonte-titulo] ">
          15 anos
        </h2>
      </section>

      <section className="secao  ">
        <CarrosselFotos />
      </section>

      <section className=" secao ">
        <div className=" container">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10 mt-[-80px]  font-[--fonte-titulo] text-zinc-700 font-medium">
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
              <b>Yasmim💜</b>
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
          <h2 className="text-5xl text-center font-semibold mb-20 mt-10 text-zinc-700">
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
                className="mx-auto text-violet-700 mb-5"
              />
              <h3 className="font-bold text-xl">Data</h3>
              <p className="mt-2"> 05 de Setembro de 2026</p>
            </div>
            <div
              className="
card-info
"
            >
              <Clock3 size={45} className="mx-auto text-violet-700 mb-5" />
              <h3 className="font-bold text-xl">Horas</h3>
              <p className="mt-2"> 19:00</p>
            </div>
            <div
              className="
card-info
"
            >
              <MapPin size={45} className="mx-auto text-violet-700 mb-5" />
              <h3 className="font-bold text-xl">Local</h3>
              <p className="mt-2"> Chacára da Família</p>
            </div>
            <div
              className="
card-info
"
            >
              <Navigation size={45} className="mx-auto text-violet-700 mb-5" />
              <h3 className="font-bold text-xl">Como chegar</h3>
              <a
                href="https://www.google.com/maps/dir/-15.8786403,-48.0765443/-15.972196,-48.239297/@-15.9765836,-48.2412687,184m/data=!3m1!1e3!4m16!4m15!1m11!3m4!1m2!1d-48.2413535!2d-15.9849611!3s0x935bd9fd06467f93:0x4673bf5cb7e02596!3m4!1m2!1d-48.2404838!2d-15.9741213!3s0x935bda0089e26341:0xfcad9f62f6f84829!4e1!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-violet-700 hover:underline"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className=" container">
          <div className="bg-white rounded-3xl shadwon-lg p-8 text-zinc-700 font-medium ">
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
