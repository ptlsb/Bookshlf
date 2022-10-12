const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    photos: {
      type: Array,
      default: [],
    },
    editionYear: {
      type: Number,
    },
    author: {
      type: String,
      trim: true,
    },
    ISBN: {
      type: String,
    },
    weightInGrams: {
      type: Number,
    },
    MRP: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
    },
    embedVideo: {
      type: String,
    },
    tags: {
      type: Array,
      default: [],
    },
    qty: {
      type: Number,
      default: 1,
    },
    sellerId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    sellerName: {
      type: String,
      required: true,
    },
    pickupAddressId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    adminMessage: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: "Approval Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
