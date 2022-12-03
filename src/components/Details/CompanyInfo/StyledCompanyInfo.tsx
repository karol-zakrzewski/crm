import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;

  p,
  span {
    text-align: start;
    font-size: 0.8rem;
  }
`;

export const StyledCompanyInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledImgWrapper = styled(Grid)`
  display: grid;
  place-items: center;

  img {
    width: 100%;
    max-width: 250px;
  }
`;
