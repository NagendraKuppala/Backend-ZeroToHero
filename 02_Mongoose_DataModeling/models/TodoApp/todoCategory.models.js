import mongoose from "mongoose";

const todoCategorySchema = new mongoose.Schema({
    category: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref:"Todo"}] //Array of Todo List/objects
}, {timestamps: true})

export const TodoCategory = mongoose.model("TodoCategory", todoCategorySchema)