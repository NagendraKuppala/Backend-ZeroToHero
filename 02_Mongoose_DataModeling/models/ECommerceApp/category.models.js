import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    category: { type: String, required: true},
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Product"}
}, {timestamps: true})

export const Category = mongoose.model("Category", categorySchema)