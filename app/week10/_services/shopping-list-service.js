import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async userId => {
    const items = [];

    try {
        const userRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(userRef);

        querySnapshot.forEach(doc => {
            items.push({
            id: doc.id,
            data: doc.data(),
        });
    });

    return items;
    } catch (error) {
        console.error("Error getting items:", error);
        throw error;
    }
}

const addItem = async (userId, item) => {
    try {
        const userRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(userRef, item);
        return docRef.id;

    } catch (error) {
        console.error("Error adding item:", error);
        throw error;
    }
}

export { getItems, addItem };
