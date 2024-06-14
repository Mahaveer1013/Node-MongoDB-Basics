import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();
import { User } from "../models/models.js";

const register_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(409).send({ 'message': 'enter the credentials' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.send({ 'message': 'user registration successfull' });
    } catch (error) {
        console.log(error);
    }
}

const login_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(409).send({ 'message': 'enter the credentials' });
        }
        const user = await User.findOne({ email })
        if (!user) {
            res.status(409).send({ 'message': 'Incorrect Credetials' });
        }
        const isPasswordvalid = await bcrypt.compare(password, user.password);
        if (!isPasswordvalid) {
            res.status(409).send({ 'message': 'Incorrect Credetials' });
        }
        const token = jwt.sign({ user_id: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });
        res.send({ 'token': token });
    } catch (error) {
        console.log(error,'error');
        res.status(500).send({ 'message': error });
    }
}

export { register_user, login_user };