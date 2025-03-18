import { Schema, model } from "mongoose";

const vetSchema = new Schema({
  name: String,
  location: String,
  contact: String,
  services: [String],
});

export default model("Vet", vetSchema);
