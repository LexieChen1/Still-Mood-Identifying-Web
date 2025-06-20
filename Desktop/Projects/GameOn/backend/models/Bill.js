import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
  event: String,
  amount: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}],
  split: { type: Object }, 
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Bill", billSchema);