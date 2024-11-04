import { Router } from "express";
import express from 'express';
import { initializeApp } from "firebase/app";
import getClient from "../services/firebaseFunctions";
import { getFirestore, doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth/web-extension";
import { getAuth } from "firebase/auth";
import admin from "firebase-admin";

const firebaseConfig = require("../app/firebaseConfig.json");
const appBase = initializeApp(firebaseConfig);
const db = getFirestore(appBase);
const auth = getAuth(appBase);

const router = Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));
var serviceAccount = require("../app/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

router.post('/singup', async (req, res) => {
    const userResponse = await admin.auth().createUser({
        phoneNumber: req.body.phone
    });
    res.json(userResponse);
});

router.get('/singin', async (req, res) => {
    try {
        const confimation = await signInWithPhoneNumber(auth, req.body.phone)
        const credential = confimation.confirm("101112");
        console.log(credential)
    } catch (error) {
        console.log(error);
    }
})

router.get('/client', async (req, res) =>  {
    var response = await getClient(db, 'client');
    console.log(response);
    res.send(response);
})

router.post('/client', async (req, res) => {
    if (req.headers.name == '') {
        res.send('Require name');
    } else if (req.headers.id == '') {
        res.send('Require id');
    } else {
        const response = await addDoc(collection(db, "client"), {
            name: req.headers.name,
            id: req.headers.id,
        });
        res.send(response);
    }
})

router.put("/", (req, res) => {

});

export default router;