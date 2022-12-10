import {
  TableContainer,
  Table as MuiTable,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

type Props = {
  children: JSX.Element[];
  tableHeadings: TableHeading[];
};

export type TableHeading = {
  name: string;
  align: "left" | "right" | "center";
};

const Table = ({ children, tableHeadings }: Props) => {
  return (
    <TableContainer component={Paper} elevation={5}>
      <MuiTable aria-label="Company table">
        <TableHead>
          <TableRow>
            {tableHeadings.map(({ align, name }, index) => {
              return (
                <TableCell key={`${name}-${index}`} align={align}>
                  {name}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
