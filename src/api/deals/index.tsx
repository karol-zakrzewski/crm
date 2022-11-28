import {
  collection,
  CollectionReference,
  FirestoreError,
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
  ) as CollectionReference<Deal[]>;

  try {
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (error) {
    if (error instanceof FirestoreError) {
      throw new Error(firebaseError[error.code]);
    }
    throw new Error("fetch failed");
  }
};
