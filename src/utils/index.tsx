import { AddCompanyFormTypes, CompaniesType } from "../types/types";

export const convertFormDataToDBObject = ({
  name,
  nip,
  city,
  street,
  zipcode,
  phone,
  email,
  persons,
}: AddCompanyFormTypes): CompaniesType => {
  return {
    name,
    nip,
    address: { city, street, zipcode },
    phone,
    email,
    persons,
  };
};
