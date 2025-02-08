import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true,
  },
  plan: {
    type: String,
    required: true,
    enum: ["Basic", "Advanced", "Business"], 
  },
  amount: {
    type: Number,
    required: true,
    min: 0, 
  },
  credits: {
    type: Number,
    required: true,
    min: 0, 
  },
  payment: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now, 
  },
});


const transactionModel =
  mongoose.models.transaction || mongoose.model("transaction", transactionSchema);

export default transactionModel;
