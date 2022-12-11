import { Container, IconButton } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { paths } from "../../utils/paths";
import { BsCurrencyDollar } from "react-icons/bs";
import { fetchDealsThunk } from "../../store/deals-slice";
import { useDispatch, useSelector } from "react-redux";
import { toastActions } from "../../store/toast-slice";
import { Deal } from "../../types/deals";
import Table, { TableHeading } from "../../components/ui/table/Table";
import DealRowElement from "../../components/Deals/DealListElement/DealRowElement";

const headings: TableHeading[] = [
  {
    name: "Name",
    align: "left",
  },
  {
    name: "Open date",
    align: "right",
  },
  {
    name: "Close date",
    align: "right",
  },
  {
    name: "Source",
    align: "right",
  },
  {
    name: "Company",
    align: "right",
  },
];

const Sales = () => {
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const { dealsList } = useSelector(
    (state: { deals: { dealsList: Deal[] } }) => state.deals
  );

  useEffect(() => {
    try {
      dispatch(fetchDealsThunk());
    } catch (error) {
      if (error instanceof Error) {
        dispatch(
          toastActions.showToast({
            isOpen: true,
            message: error.message,
            status: "error",
          })
        );
      }
    }
  });
  return (
    <Container component={"main"}>
      <Header title="Deals">
        <Link to={paths.addDeal}>
          <IconButton color="primary" aria-label="Add company">
            <BsCurrencyDollar />
          </IconButton>
        </Link>
      </Header>
      <Table tableHeadings={headings}>
        {dealsList.map((deal) => {
          return <DealRowElement deal={deal} />;
        })}
      </Table>
    </Container>
  );
};

export default Sales;
