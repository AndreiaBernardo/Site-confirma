import { Response } from "express";

export function tratarErro(
  res: Response,
  error: unknown,
  status = 400
) {

  if (error instanceof Error) {

    return res.status(status).json({
      erro: error.message,
    });

  }

  return res.status(status).json({
    erro: "Erro interno.",
  });

}