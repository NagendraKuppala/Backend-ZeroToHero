import mongoose from "mongoose"

const quantitySchema = new mongoose.Schema({
    product: { type: mongoose.Types.ObjectId, ref: 'Product', required: true }, // reference to the Product model
    quantity: { type: Number, required: true}
})

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Types.ObjectId, ref: 'User' }, // this is the id of the User who placed
    items: {type: [quantitySchema]},
    totalPrice: { type: Number, required: true },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending'
        }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)