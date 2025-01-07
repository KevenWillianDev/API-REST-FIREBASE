import { userModel } from "../models/user/user_model";
import { initializeApp } from "firebase/app";
import { postRecord } from "../services/firebase.functions";
import { getFirestore, doc, setDoc, addDoc, collection, getDocs } from 'firebase/firestore';
import { type userModelData } from '../models/user/user_model';
const appBase = initializeApp(require("../app/firebaseConfig.json"));
const db = getFirestore(appBase);

export class usersRepository{
    async create(data: userModel): Promise<userModel> {
        const user: userModelData = data;
        const response: any = await postRecord(db, 'users', String(4), user);
        const userResponse: userModel = {
            id: response.id,
            name: data.name,
        }
        console.log(userResponse);
        return userResponse;
    }
}