import { cloudinary } from "../config/cloudinary.js";

export async function uploadImagem(
  caminhoArquivo: string,
  pasta: string
) {

  try {

    console.log("Arquivo recebido:", caminhoArquivo);

    const resultado = await cloudinary.uploader.upload(
      caminhoArquivo,
      {
        folder: pasta,
      }
    );

   

    return resultado.secure_url;

  } catch (error) {

    console.error("ERRO CLOUDINARY");

    console.error(error);

    throw error;

  }

}