import { Router } from "express";
import { getVets } from "../controllers/vetController.js";
const router = Router();

router.get("/vets", getVets);

export default router;
