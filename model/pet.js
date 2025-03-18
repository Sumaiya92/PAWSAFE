import { Schema, model } from "mongoose";

const petSchema = new Schema({
  name: String,
  type: String,
  age: Number,
  description: String,
  image: String,
  status: { type: String, default: "available" }, // available, adopted
});

export default model("Pet", petSchema);
