import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

export async function uploadImagemBuffer(
  buffer: Buffer,
  pasta: string
): Promise<string> {

  return new Promise((resolve, reject) => {

    const stream = cloudinary.uploader.upload_stream(

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

    streamifier.createReadStream(buffer).pipe(stream);

  });

}