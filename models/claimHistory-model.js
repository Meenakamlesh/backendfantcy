import mongoose from "mongoose";

const claimHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // here we're giing refrence of our user model so that we can fetch our user 
  },
  points: Number,
  claimedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("ClaimHistory", claimHistorySchema);
