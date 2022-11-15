import { getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompany } from "../../../api";
import Details from "../../../components/Details/Details";
import { CompaniesType, Employee } from "../../../types/types";
import "./CompanyDetails.css";

const defaultValue = {
  id: "",
  name: "",
  nip: "",
  address: {
    city: "",
    street: "",
    zipcode: "",
  },
  phone: "",
  email: "",
  person: "",
};

const Company = () => {
  const { id } = useParams<{ id: any }>();
  const [companyData, setCompanyData] = useState<CompaniesType | undefined>(
    undefined
  );
  const [employees, setEmployees] = useState<Employee[] | null>(null);

  const getCompanyById = async (id: string) => {
    setCompanyData(await getCompany(id));
  };
  useEffect(() => {
    getCompanyById(id);
  }, [id]);

  useEffect(() => {
    if (companyData) {
      companyData.persons.forEach((employeeRef) => {
        // @ts-ignore
        getDoc(employeeRef).then((doc: DocumentSnapshot<Employee>) => {
          setEmployees((value) => {
            if (value?.length) {
              return [...value, doc.data()];
            }

            return [doc.data()];
          });
        });
      });
    }
  }, [companyData]);

  if (companyData === undefined) {
    return <h2>Oops coś poszło nie tak...</h2>;
  }

  return (
    <Details
      companyData={companyData}
      setCompanyData={setCompanyData}
      employees={employees}
    />
  );
};

export default Company;
