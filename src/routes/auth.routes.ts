import { Router } from "express";
import admin from "firebase-admin";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { signInWithPhoneNumber } from "firebase/auth/web-extension";

const authRoutes = Router();

const firebaseConfig = require("../app/firebaseConfig.json");
const appBase = initializeApp(firebaseConfig);
const auth = getAuth(appBase);
var serviceAccount = require("../app/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

authRoutes.post('/singup', async (req, res) => {
    const userResponse = await admin.auth().createUser({
        phoneNumber: req.body.phone
    });
    res.json(userResponse);
});

authRoutes.get('/singin', async (req, res) => {
    try {
        const confimation = await signInWithPhoneNumber(auth, req.body.phone)
        const credential = confimation.confirm("101112");
        console.log(credential)
    } catch (error) {
        console.log(error);
    }
});

export default authRoutes;