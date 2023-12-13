import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
},{timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)