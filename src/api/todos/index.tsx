import { FirebaseError } from "firebase/app";
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentReference,
  getDocs,
  orderBy,
  query,
  updateDoc,
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
  const q = query(collectionRef, orderBy("checked", "asc"));
  const querySnapshot = await getDocs(q);
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
    return await addDoc(collectionRef, data);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error("Dodawanie nie powiodło się");
    }
    throw new Error("Dodawanie nie powiodło się");
  }
};

export const editTodo = async (
  companyId: string,
  todoId: string,
  data: Partial<Todo>
) => {
  const docRef = doc(
    db,
    COLLECTION_NAMES.COMPANIES,
    companyId,
    COLLECTION_NAMES.TODOS,
    todoId
  ) as DocumentReference<Omit<Todo, "id">>;

  try {
    await updateDoc(docRef, data);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message);
    }
    throw new Error("Editing failed");
  }
};

export const deleteTodo = async (companyId: string, todoId: string) => {
  const docRef = doc(
    db,
    COLLECTION_NAMES.COMPANIES,
    companyId,
    COLLECTION_NAMES.TODOS,
    todoId
  ) as DocumentReference<Omit<Todo, "id">>;

  try {
    await deleteDoc(docRef);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message);
    }
    throw new Error("Deletion failed");
  }
};
