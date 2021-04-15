import express from "express";
import * as AuthController from "../controller/authController";

const router = express.Router();

router.get("/", AuthController.findAll);
router.get("/:id", AuthController.findOne);
router.post("/", AuthController.createUser);
router.put("/:id", AuthController.updateUser);
router.delete("/:id", AuthController.deleteUser);

export default router;
