const mongoose = require("mongoose");

const invesmentSchema = new mongoose.Schema(
  {
    totalAmount: {
      type: Number,
      required: true,
    },
    interestAmount: {
      type: Number,
      required: true,
    },
    maturityValue: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Investment = mongoose.model("investment", invesmentSchema);

module.exports = Investment;
