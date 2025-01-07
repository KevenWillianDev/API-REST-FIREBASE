import express from 'express';
import { type userModelData } from '../models/user/user_model';
import { CreateUser } from '../controllers/user/user.controller';
import { usersRepository } from '../repositories/user.repository';

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
    const { user } = req.body;
    if (!user.id || user.id === '') {
      try {
        const userData: userModelData = {name: user.name};
        const userRepository = new usersRepository();
        const createUser = new CreateUser(userRepository);
        const createdUser = await createUser.handle(userData);

        res.status(201).json({ success: true, user: createdUser });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error creating user!" });
      }
    } else {
        res.status(400).json({ success: false, message: "ID not permited for created new User!" });
    }
});

export default userRoutes;