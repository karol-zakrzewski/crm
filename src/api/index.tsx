import {
  addDoc,
  collection,
  CollectionReference,
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

export const getCompany = async (id = "") => {
  try {
    const data: CompaniesType = await getDoc(
      doc(db, COLLECTION_NAMES.COMPANIES, id)
    ).then((value) => {
      return {
        id: value.id,
        ...value.data(),
      } as CompaniesType;
    });
    return data;
  } catch (error) {}
};

export const addCompany = async (data: CompaniesType) => {
  try {
    await addDoc(companiesCollection, data);
  } catch (error: any) {
    return error.code;
  }
};

export const editCompany = async (id = "", data: CompaniesType) => {
  const docRef = doc(db, COLLECTION_NAMES.COMPANIES, id);
  await setDoc(docRef, data);
};
