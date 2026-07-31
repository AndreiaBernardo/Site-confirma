import { app } from "./app.js";
import { familiaRoutes } from "./routes/familia.routes.js";
import mensagemRoutes from "./routes/mensagem.routes.js";
import presenteRoutes from "./routes/presente.routes.js";
import path from "path";
import express from "express";
import fotoRoutes from "./routes/foto.routes.js";
import convidadoRoutes from "./routes/convidado.routes.js";

import adminRoutes from "./routes/admin.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const PORT = Number(process.env.PORT) || 3333;

app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/familias", familiaRoutes);
app.use("/convidados", convidadoRoutes);
app.use("/presentes", presenteRoutes);
app.use("/mensagens", mensagemRoutes);
app.use("/fotos", fotoRoutes);

app.use("/admins", adminRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
