export interface Inputs {
  name: string;
  city: string;
  street: string;
  zipcode: number;
  email: string;
  nip: number;
  persons: string;
  phone: number;
}

export type FieldNames =
  | "name"
  | "city"
  | "street"
  | "zipcode"
  | "email"
  | "nip"
  | "phone";
