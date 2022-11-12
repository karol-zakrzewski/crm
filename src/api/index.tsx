import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  FirestoreError,
  getDoc,
  getDocs,
  onSnapshot,
  QuerySnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "./api";
import { CompaniesType } from "../types/types";
import { firebaseError } from "./firestoreError";

const COLLECTION_NAMES = {
  COMPANIES: "companies",
};

export const companiesCollection: CollectionReference<DocumentData> =
  collection(db, COLLECTION_NAMES.COMPANIES);

export const getCompanies = async () => {
  const data: CompaniesType[] = await getDocs(companiesCollection).then(
    (querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as CompaniesType;
      });
    }
  );
  return data;
};

export const fetchCompanies = async (
  handler: (snapshot: QuerySnapshot<Omit<CompaniesType, "id">>) => void
) => {
  const companiesCollection = collection(
    db,
    COLLECTION_NAMES.COMPANIES
  ) as CollectionReference<Omit<CompaniesType, "id">>;

  onSnapshot(companiesCollection, handler);
};

export const getCompany = async (id: string | undefined) => {
  if (typeof id === "string") {
    const docRef = doc(db, COLLECTION_NAMES.COMPANIES, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as CompaniesType;
    } else {
      throw Error("Can't loaded data");
    }
  }
};

export const addCompany = async (data: Omit<CompaniesType, "id">) => {
  const collectionRef = collection(
    db,
    COLLECTION_NAMES.COMPANIES
  ) as CollectionReference<Omit<CompaniesType, "id">>;
  try {
    await addDoc(collectionRef, data);
  } catch (error) {
    if (error instanceof FirestoreError) {
      throw new Error(firebaseError[error.code]);
    }
    throw new Error("Operacja się nie powiodła");
  }
};

export const editCompany = async (
  id: string | undefined,
  data: CompaniesType
) => {
  if (typeof id === "string") {
    const docRef = doc(db, COLLECTION_NAMES.COMPANIES, id);
    await setDoc(docRef, data);
  }
};

export const deleteCompany = async (id: string | undefined) => {
  if (typeof id === "string") {
    const docRef = doc(db, COLLECTION_NAMES.COMPANIES, id);
    await deleteDoc(docRef);
  }
};
