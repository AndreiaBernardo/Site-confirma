interface CardPresenteProps{
    nome: string;
    
    tamanho?: string;
    imagem: string;
    link: string;
    reservado: boolean;
    reservador?: string | null;
    onReservar:() => void;
}

export default function CardPresente({
    nome, 
    
    imagem,
    tamanho,
    link,
    reservado,
    onReservar

}: CardPresenteProps){
    return(
        <article  className="
        bg-white
        rounded-2xl
        sm:rounded-3xl
        shadow-lg
        overflow-hidden
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        flex
        flex-col
        h-full
        ">
            <img src={imagem} alt={nome} className="w-full h-40 sm:h-48 lg:h-64 object-cover" />

            <div className="p-3 sm:p-4 lg:p-6 flex-1 flex flex-col">
                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold line-clamp-2">{nome}</h2>

               

                
               {tamanho && (
               <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-2">Tamanho | cor : {tamanho}</p>
               )}
               
               {reservado ? (
                <button className="mb-2 sm:mb-3 font-bold text-sm sm:text-base" >
                   Este presente já foi reservado.
                </button>
               ) :(
                <a href={link} target="_blank" className="font-bold text-xs sm:text-sm lg:text-base text-violet-700 hover:text-violet-900 transition-colors mb-1.5 text-center"> 
                    Ver na loja
                </a>
               )}

                <button
                onClick={onReservar}
                disabled={reservado}
                className={`mt-auto py-2 sm:py-3 rounded-lg lg:rounded-xl font-medium text-sm sm:text-base transition-colors ${
                    reservado
                        ? "w-full bg-gray-500 text-white"
                        : "w-full bg-violet-700 text-white hover:bg-violet-800"
                }`}
                >
                  {reservado
                    ? "Presente Reservado"
                    : "Escolher Presente"}
                </button>
            </div>
        </article>
    )
}