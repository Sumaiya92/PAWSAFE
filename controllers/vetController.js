import Vet from "../model/vet.js";

export async function getVets(req, res) {
  try {
    const vets = await Vet.find();
    res.json(vets);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
