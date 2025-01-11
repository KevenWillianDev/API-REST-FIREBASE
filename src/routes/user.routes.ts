import express from 'express';
import { type userModelData } from '../models/user/user.model';
import { createUser } from '../controllers/user/user.controller';
import { UsersRepository } from '../repositories/user.repository';

const userRoutes = express.Router();

// userRoutes.get('/:id', (req, res) => {
//     var response = doc(collection(db, 'user', req.body.userid));
//     console.log(response);
//     res.writeHead(201, {'content-type': 'application/json'}).end(JSON.stringify({
//         response
//     }));
// });

// userRoutes.get('', async (req, res) => {
//     var response = await getRecord(db, 'users');
//     res.writeHead(201, {'content-type': 'application/json'}).end(JSON.stringify({
//         response
//     })); 
// });

userRoutes.post('', async (req, res) => {
  try {
    const { user } = req.body;
    const userData: userModelData = user;
    const userRepository = new UsersRepository();
    const createUser1 = new createUser(userRepository);
    const createdUser = await createUser1.handle(userData);

    res.status(201).json({ success: true, user: createdUser });
  } catch (e) {
    res.status(500).json({ success: false, message: e });
  }
});

export default userRoutes;