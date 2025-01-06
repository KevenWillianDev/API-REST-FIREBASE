import { collection, doc, getDocs, setDoc, type Firestore } from 'firebase/firestore';

export async function getRecord(db: Firestore, collectionParam: string) {
    const referenceCol = collection(db, collectionParam);
    const referenceSnapshot = await getDocs(referenceCol);
    const referenceList = referenceSnapshot.docs.map(doc => doc.data());
    return referenceList; 
}

export async function postRecord(db: Firestore, collectionParam: string, idReference: string, Data: object) {
    const referenceCollection = collection(db, collectionParam);
    const referenceDoc = doc(referenceCollection, idReference);
    var response = await setDoc(referenceDoc, {
        Data
    });
    return response;
}