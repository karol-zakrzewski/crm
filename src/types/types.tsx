export interface CompaniesType {
  id: string;
  name: string;
  nip: number;
  address: {
    city: string;
    street: string;
    zipcode: string;
  };
}

export type AddCompanyFormTypes = {
  name: string;
  nip: string;
  city: string;
  street: string;
  zipcode: string;
  phone: string;
  email: string;
  person: string;
};
