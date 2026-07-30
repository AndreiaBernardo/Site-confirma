import { Router } from "express";
import { FamiliaController } from "../controllers/familia.controller.js";

const router = Router();

const controller = new FamiliaController();

router.post("/login", (req, res) =>
  controller.login(req, res)
);

router.get("/", controller.listar.bind(controller));

router.get("/:id", controller.buscarPorId.bind(controller));

router.post("/", controller.criar.bind(controller));

router.put("/:id", controller.atualizar.bind(controller));

router.patch(
  "/confirmacao",
  controller.salvarConfirmacao.bind(controller)
);


router.delete("/:id", controller.excluir.bind(controller));

export { router as familiaRoutes };