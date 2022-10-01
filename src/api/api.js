import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD1jDkOF4Xr2j6Bj5dG97y2flF6bDOUAIo",
  authDomain: "sales-power-crm.firebaseapp.com",
  projectId: "sales-power-crm",
  storageBucket: "sales-power-crm.appspot.com",
  messagingSenderId: "824831814198",
  appId: "1:824831814198:web:71e91a9e56aaf6a7608697",
  measurementId: "G-K1H8VPCVF1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
