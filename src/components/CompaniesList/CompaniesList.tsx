import { CompaniesType } from "../../types/types";
import Table, { TableHeading } from "../ui/table/Table";

import CompanyElement from "./CompanyElement/CompanyElement";

const heading: TableHeading[] = [
  {
    name: "Option",
    align: "left",
  },
  {
    name: "Company name",
    align: "left",
  },
  {
    name: "Tax number",
    align: "right",
  },
  {
    name: "City",
    align: "right",
  },
  {
    name: "Street",
    align: "right",
  },
  {
    name: "Zip code",
    align: "right",
  },
  {
    name: "",
    align: "right",
  },
];

type Props = {
  companiesList: CompaniesType[];
};

const CompaniesList = ({ companiesList }: Props) => {
  const renderCompanies = companiesList.map((company) => {
    return <CompanyElement company={company} key={company.nip} />;
  });
  return <Table tableHeadings={heading}>{renderCompanies}</Table>;
};

export default CompaniesList;
