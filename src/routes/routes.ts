import express from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

require('dotenv').config();
const port = 8000;
const router = express();

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.use('/users', userRoutes);

router.use('/auth', authRoutes);

router.listen(port, () => {
    console.log(`application listening on port ${port}`)
});

export default router;