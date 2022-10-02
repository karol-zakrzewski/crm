import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./api";
import { AddCompanyFormTypes, CompaniesType } from "../types/types";

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

export const addCompany = async (data: CompaniesType) => {
  await addDoc(companiesCollection, data);
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
