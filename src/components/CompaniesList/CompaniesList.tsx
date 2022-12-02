import { CompaniesType } from "../../types/types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CompanyElement from "./CompanyElement/CompanyElement";

type Props = {
  companiesList?: CompaniesType[];
};

const CompaniesList = ({ companiesList }: Props) => {
  const renderCompanies = companiesList?.map((company) => {
    return <CompanyElement company={company} key={company.nip} />;
  });
  return (
    <TableContainer component={Paper} elevation={5}>
      <Table aria-label="Company table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Option</TableCell>
            <TableCell>Company name</TableCell>
            <TableCell align="right">Tax number</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Street</TableCell>
            <TableCell align="right">Zip code</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderCompanies}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompaniesList;
