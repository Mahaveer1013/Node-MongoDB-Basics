import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required : [true, 'Please enter product name']
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
    
)

const Product = mongoose.model('Product', ProductSchema);

const UserSchema = mongoose.Schema(
    {
        email: { type: String, required: true, unique: true, label: 'Provide Email' },
        password: { type: String, required: true, unique: true, label: 'Provide Password' }
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('User', UserSchema)

export { Product, User };