import { addDoc, collection, doc, getDocs, getDoc, setDoc, type Firestore } from 'firebase/firestore';

export async function getRecord(db: Firestore, collectionParam: string) {
    const referenceCol = collection(db, collectionParam);
    const referenceSnapshot = await getDocs(referenceCol);
    const referenceList = referenceSnapshot.docs.map(doc => doc.data());
    return referenceList; 
}

export async function postRecord(db: Firestore, collectionParam: string, idReference: string, Data: object) {
    const referenceCollection = collection(db, collectionParam);
    // const referenceDoc = doc(referenceCollection, idReference);
    const newItem = await addDoc(referenceCollection, Data);
    const createdItemRef = doc(referenceCollection, newItem.id);
    const createdItem = await getDoc(createdItemRef);
    // var response = await setDoc(referenceDoc, {
    //     Data
    // });
    return createdItem;
}