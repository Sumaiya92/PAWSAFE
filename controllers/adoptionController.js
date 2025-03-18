import Pet from "../model/pet.js";

export async function adoptPet(req, res) {
  try {
    const { petId } = req.body;
    await Pet.findByIdAndUpdate(petId, { status: "adopted" });
    res.json({ message: "Adoption request submitted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
