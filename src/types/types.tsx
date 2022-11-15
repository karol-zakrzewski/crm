import { DocumentSnapshot } from "firebase/firestore";

export interface CompaniesType {
  id?: string;
  name: string;
  nip: number;
  address: {
    city: string;
    street: string;
    zipcode: number;
  };
  phone: number;
  email: string;
  persons: DocumentSnapshot<Employee>[];
}

export interface Employee {
  name: string;
  phone: number;
  email: string;
}

export type AddCompanyFormTypes = {
  name: string;
  nip: number;
  city: string;
  street: string;
  zipcode: number;
  phone: number;
  email: string;
};

export type Person = {
  id?: string;
  name: string;
  lastName: string;
  company: string;
  phone: number;
  email: string;
};
