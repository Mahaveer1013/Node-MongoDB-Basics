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

export const getBooks = async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).send(data)    
    } catch (err) {
        res.status(404).send(err.message)
    }
}

export const getSingleBook = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        res.status(200).send(data);
    } catch (err) {
        res.status(404).send(err.message);
    }
}

export const addBooks = async (req, res) => {
    try {
        const data = await Product.create(req.body)
        res.status(200).send({ 'message': 'POST ADDED' , 'data': data});
    } catch (err) {
        res.status(404).send(err.message)
    }    
}

export const updateBooks = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        const data = await Product.findById(req.params.id);
        res.status(200).send({ 'message': 'data updated successfully', 'data': data });
    } catch (err) {
        res.status(404).send({ 'error': err.message });
    }
}

export const deleteBooks = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send({ 'message': 'data deleted successfully' });
    } catch (err) {
        res.status(404).send({ 'error': err.message });
    }
}
