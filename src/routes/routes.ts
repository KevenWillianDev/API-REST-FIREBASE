import express from 'express';
import { Router } from "express";
import userRoutes from '../routes/user.routes';
import authRoutes from './auth.routes';

const router = Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.use('/users', userRoutes);

router.use('/auth', authRoutes);

const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`application listening on port ${port}`)
});

export default router;