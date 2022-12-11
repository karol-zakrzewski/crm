import { TableCell, TableRow } from "@mui/material";
import { DocumentSnapshot, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Deal } from "../../../types/deals";
import { CompaniesType } from "../../../types/types";

type Props = {
  deal: Deal;
};

const DealRowElement = ({ deal }: Props) => {
  const { name, closeDate, openDate, source, company } = deal;
  const [companyName, setCompanyName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getDataByDocRef = async () => {
      const querySnapshot = (await getDoc(company)) as DocumentSnapshot<
        Omit<CompaniesType, "id">
      >;
      const companyName = querySnapshot.data()?.name;
      setCompanyName(companyName);
    };

    getDataByDocRef();
  }, [company]);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell component="th" scope="row" align="right">
        {openDate}
      </TableCell>
      <TableCell component="th" scope="row" align="right">
        {closeDate}
      </TableCell>
      <TableCell component="th" scope="row" align="right">
        {source}
      </TableCell>
      <TableCell component="th" scope="row" align="right">
        {companyName ? companyName : "loading..."}
      </TableCell>
    </TableRow>
  );
};

export default DealRowElement;
