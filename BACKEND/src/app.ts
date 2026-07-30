import express from "express";
import cors from "cors";
import { prisma } from "./config/prisma.js";


const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    mensagem: "API funcionando",
  });
});

app.get("/test-banco", async (_req, res) => {
  try {
    await prisma.familia.count();

    res.json({
      status: "Banco conectado com sucesso!! 🚀",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      erro: "Erro ao conectar com o banco.",
    });
  }
});

 


export { app };