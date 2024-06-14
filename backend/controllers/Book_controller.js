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
