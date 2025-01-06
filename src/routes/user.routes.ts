import express from 'express';
import { initializeApp } from "firebase/app";
import { getRecord , postRecord } from "../services/firebase.functions";
import { getFirestore, doc, setDoc, addDoc, collection, getDocs } from 'firebase/firestore';
import userModel from '../models/user/user_model';
import { CreateUser } from '../controllers/user/user.controller';
import { UsersRepository } from '../repositories/user.repository';

const userRoutes = express.Router();
const appBase = initializeApp(require("../app/firebaseConfig.json"));
const db = getFirestore(appBase);

userRoutes.get('/:id', (req, res) => {
    var response = doc(collection(db, 'user', req.body.userid));
    console.log(response);
    res.writeHead(201, {'content-type': 'application/json'}).end(JSON.stringify({
        response
    }));
});

userRoutes.get('', async (req, res) => {
    var response = await getRecord(db, 'users');
    res.writeHead(201, {'content-type': 'application/json'}).end(JSON.stringify({
        response
    })); 
});

userRoutes.post('', async (req, res) => {
    const { user } = req.body;
    if (!user || !user.id || user.id === '') {
      const modelUser: userModel = user;
      try {
        const usersRepository = new UsersRepository();
        const createUser = new CreateUser(usersRepository);
  
        const createdUser = await createUser.handle({
            name: '',
        });
  
         res.status(201).json({ success: true, user: createdUser });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error creating user" });
      }
    } else {
        res.status(400).json({ success: false, message: "User ID already exists" });
    }
});

// var response = await postRecord(db, 'users', String(ModelUser.id), ModelUser);
// res.writeHead(201, {'content-type': 'applications/json'}).end(JSON.stringify({
//     response
// }));  
export default userRoutes;