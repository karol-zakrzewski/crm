import { collection, getDocs } from "firebase/firestore";
import { db } from "./api";
import { CompaniesType } from "../types/types";

const COLLECTION_NAMES = {
  COMPANIES: "companies",
};

export const companiesCollection = collection(db, COLLECTION_NAMES.COMPANIES);
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
