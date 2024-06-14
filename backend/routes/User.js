import express from 'express';
import { login_user, register_user } from '../controllers/User.js';

const auth_router = express.Router();

auth_router.post('/register', register_user)

auth_router.post('/login', login_user)

export {auth_router}