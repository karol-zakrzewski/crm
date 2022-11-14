import { AddCompanyFormTypes, CompaniesType } from "../types/types";

export const convertFormDataToDBObject = ({
  name,
  nip,
  city,
  street,
  zipcode,
  phone,
  email,
}: AddCompanyFormTypes): Omit<CompaniesType, "persons"> => {
  return {
    name,
    nip: Number(nip),
    address: { city, street, zipcode: Number(zipcode) },
    phone: Number(phone),
    email,
  };
};
