import {
  collection,
  CollectionReference,
  FirestoreError,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { Deal } from "../../types/deals";
import { db } from "../api";
import { firebaseError } from "../firestoreError";

const COLLECTION_NAMES = {
  DEALS: "deals",
  COMPANIES: "companies",
};

export const fetchDeals = async () => {
  const collectionRef = collection(
    db,
    COLLECTION_NAMES.DEALS
  ) as CollectionReference<Omit<Deal, "id">>;

  try {
    const querySnapshot = await getDocs(collectionRef);
    const data: Omit<Deal, "company" | "contact">[] = querySnapshot.docs.map(
      (doc) => {
        const { contact, ...rest } = doc.data();

        return { id: doc.id, ...rest };
      }
    );

    return data;
  } catch (error) {
    if (error instanceof FirestoreError) {
      throw new Error(firebaseError[error.code]);
    }
    throw new Error("fetch failed");
  }
};
