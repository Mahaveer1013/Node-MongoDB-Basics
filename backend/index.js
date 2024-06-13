import express from 'express'
import { PORT, mongoURI } from './config.js'
import mongoose from 'mongoose';
import { books_router } from './routes/Books_routes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('You are connected')
})

app.use('/books', books_router)

mongoose.connect(mongoURI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listening at port ${PORT}`);
        })
        console.log('connected');
    }).catch((error) => {
        console.log(error.message);
    })