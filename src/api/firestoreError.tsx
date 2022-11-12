import { FirestoreErrorCode } from "firebase/firestore";

export const firebaseError: Record<FirestoreErrorCode, string> = {
  "not-found": "Nie znaleziono dokumentu",
  "permission-denied": "Brak uprawnień",
  cancelled: "Operacja anulowana",
  unknown: "Operacja nieznana",
  "invalid-argument": "Nieprawidłowy element",
  "deadline-exceeded": "Upynął czas oczekiwania",
  "already-exists": "Ten element ju istnieje",
  "resource-exhausted": "Limit został wyczerpany",
  "failed-precondition": "Operacja została odrzucona",
  aborted: "Operacja została odrzucona",
  "out-of-range": "Próbowano wykonać operację poza zakresem",
  unimplemented: "Operacja jest nie zaimplementowana",
  internal: "Błąd wewnętrzny",
  unavailable: "Operacja została odrzucona",
  "data-loss": "Nieodwracalna utrata danych",
  unauthenticated: "Operacja jest nie uwierzytleniona",
};
