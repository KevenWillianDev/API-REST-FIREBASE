import express from 'express';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, type Firestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBmlXsRsiIwHh0EfJFIHULEqoZJ5BqvrcU",
    authDomain: "modulesapp-7b405.firebaseapp.com",
    projectId: "modulesapp-7b405",
    storageBucket: "modulesapp-7b405.firebasestorage.app",
    messagingSenderId: "728473671984",
    appId: "1:728473671984:web:24cd599bb8990e198250f5",
    measurementId: "G-88NTB91870"
};

const appBase = initializeApp(firebaseConfig);
const db = getFirestore(appBase);
const app = express();
const port = 3001;

async function getClient(db: Firestore, collectionParam: string) {
    const clientCol = collection(db, collectionParam);
    const clientSnapshot = await getDocs(clientCol);
    const clientList = clientSnapshot.docs.map(doc => doc.data());
    console.log(clientList);
    return clientList;
}

app.get('/client', async (req, res) =>  {
    var response = await getClient(db, 'client');
    console.log(response);
    res.send(response);
})

app.listen(port, () => {
    console.log(`application listening on port ${port}`)
})