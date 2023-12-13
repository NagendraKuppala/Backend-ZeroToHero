import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: "" },
    image: { type: String},
    price: { type: Number, required: true},
    inStock: { type: Boolean, default: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category"},
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)