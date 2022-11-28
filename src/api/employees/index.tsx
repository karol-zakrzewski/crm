import { addDoc, collection, FirestoreError } from "firebase/firestore";
import { Employee } from "../../types/types";
import { db } from "../api";

const COLLECTION_NAMES = {
  EMPLOYEES: "employees",
};

export const addEmployee = async (data: Employee) => {
  const collectionRef = collection(db, COLLECTION_NAMES.EMPLOYEES);
  try {
    return await addDoc(collectionRef, data);
  } catch (error) {
    if (error instanceof FirestoreError) {
      throw new Error("Błąd dodawania");
    }
  }
};
