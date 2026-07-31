import { cloudinary } from "../config/cloudinary.js";
import streamifier from "streamifier";


export async function uploadImagem(
  caminhoArquivo: string,
  pasta: string
) {
  const resultado = await cloudinary.uploader.upload(
    caminhoArquivo,
    {
      folder: pasta,
    }
  );

  return resultado.secure_url;
}


export async function uploadImagemBuffer(
  buffer: Buffer,
  pasta: string
): Promise<string> {

  return new Promise((resolve, reject) => {

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: pasta,
      },
      (error, result) => {

        if (error) {
          return reject(error);
        }

        resolve(result!.secure_url);

      }
    );

    streamifier
      .createReadStream(buffer)
      .pipe(uploadStream);

  });

}