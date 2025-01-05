import express from 'express';
import { initializeApp } from "firebase/app";
import { getRecord , postRecord } from "../services/firebaseFunctions";
import { getFirestore, doc, setDoc, addDoc, collection, getDocs } from 'firebase/firestore';
import userModel from '../models/user/user_model';

var ModelUser = userModel;
const userRoutes = express.Router();
const appBase = initializeApp(require("../app/firebaseConfig.json"));
const db = getFirestore(appBase);

userRoutes.get('', (req, res) => {
    var response = doc(collection(db, 'user', req.body.userid));
    console.log(response);
    res.send(response);
});

userRoutes.get('', async (req, res) => {
    var response = await getRecord(db, 'users');
    console.log(response);
    res.send(response);
});

userRoutes.post('', async (req, res) => {
    ModelUser = req.body.user
    var response = await postRecord(db, 'users', String(ModelUser.id), ModelUser);
    console.log(response);
    res.send(response);
});

export default userRoutes;