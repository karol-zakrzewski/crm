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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Tabela przedsiębiorstw">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa firmy</TableCell>
            <TableCell align="right">NIP</TableCell>
            <TableCell align="right">Miasto</TableCell>
            <TableCell align="right">Ulica</TableCell>
            <TableCell align="right">Kod pocztowy</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Akcja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderCompanies}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompaniesList;
