import { FirebaseError } from "firebase/app";
import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
} from "firebase/firestore";
import { Todo } from "../../types/todo";
import { db } from "../api";

const COLLECTION_NAMES = {
  TODOS: "todos",
  COMPANIES: "companies",
};

export const getTodos = async (companyId: string) => {
  const collectionRef = collection(
    db,
    COLLECTION_NAMES.COMPANIES,
    companyId,
    COLLECTION_NAMES.TODOS
  ) as CollectionReference<Omit<Todo, "id">>;
  const querySnapshot = await getDocs(collectionRef);
  const data: Todo[] = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return data;
};

export const addTodo = async (companyId: string, data: Omit<Todo, "id">) => {
  const collectionRef = collection(
    db,
    COLLECTION_NAMES.COMPANIES,
    companyId,
    COLLECTION_NAMES.TODOS
  ) as CollectionReference<Omit<Todo, "id">>;

  try {
    await addDoc(collectionRef, data);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error("Dodawanie nie powiodło się");
    }
    throw new Error("Dodawanie nie powiodło się");
  }
};
