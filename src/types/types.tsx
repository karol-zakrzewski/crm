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
