import { Router } from "express";
import { initializeApp } from "firebase/app";
import getRecord from "../services/firebaseFunctions";
import { getFirestore, doc, setDoc, addDoc, collection } from 'firebase/firestore';
import userModel from "../models/user/user_model";

var userModels = userModel;
const userRoutes = Router();
const firebaseConfig = require("../app/firebaseConfig.json");
const appBase = initializeApp(firebaseConfig);
const db = getFirestore(appBase);

userRoutes.get('/user/:userid', (req, res) => {
    var response = doc(collection(db, 'user', req.body.userid));
    console.log(response);
    res.send(response);
});

userRoutes.get('/users', async (req, res) => {
    var response = await getRecord(db, 'user');
    console.log(response);
    res.send(response);
});

userRoutes.post('/user/:userid', async (req, res) => {
    userModels = req.body.name;
    var response = await addDoc(collection(db, 'user'), {
        userModel
    });
    console.log(response);
});

export default userRoutes;