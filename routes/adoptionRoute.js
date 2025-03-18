import { Router } from "express";
import { adoptPet } from "../controllers/adoptionController.js";
import Pet from "../model/pet.js";
const router = Router();

router.get("/pets", async (req, res) => {
    try {
      const pets = await Pet.find(); // Fetch pets from MongoDB
      res.json(pets);
    } catch (error) {
      console.error("Error fetching pets:", error);
      res.status(500).json({ message: "Error fetching pets" });
    }
  });
router.post("/adopt", adoptPet);

export default router;
