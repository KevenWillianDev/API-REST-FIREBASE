import { collection, getDocs, type Firestore } from 'firebase/firestore';

async function getRecord(db: Firestore, collectionParam: string) {
    const clientCol = collection(db, collectionParam);
    const clientSnapshot = await getDocs(clientCol);
    const clientList = clientSnapshot.docs.map(doc => doc.data());
    return clientList; 
}

export default getRecord;