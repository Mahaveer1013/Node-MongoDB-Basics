import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { books_router } from './routes/Books_routes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('You are connected')
})

app.use('/books', books_router)

console.log(process.env.MONGO_URI , process.env.PORT);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening at port ${process.env.PORT}`);
        })
        console.log('connected');
    }).catch((error) => {
        console.log(error.message);
    })