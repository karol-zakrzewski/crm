import { Box, Button, Grid } from "@mui/material";
import { Control } from "react-hook-form";
import { AddCompanyFormTypes } from "../../types/types";
import TextInput from "../ui/inputs/TextInput";
import { StyledBox, StyledInnerBox } from "./StyledCompanyForm";

type Props = {
  control: Control<AddCompanyFormTypes, any>;
  errors: any;
  handleSubmit: any;
  onSubmit: any;
  title: string;
};

const CompanyForm = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
  title,
}: Props) => {
  return (
    <StyledBox component="form" onSubmit={handleSubmit(onSubmit)}>
      <StyledInnerBox>
        <h2>{title}</h2>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextInput
              control={control}
              errors={errors}
              fieldName="name"
              label="Company name"
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              control={control}
              errors={errors}
              fieldName="city"
              label="City"
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              control={control}
              errors={errors}
              fieldName="street"
              label="Street"
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              control={control}
              errors={errors}
              fieldName="zipcode"
              label="Zip code"
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 5,
                  message: "Zipcode is incorrect",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              control={control}
              errors={errors}
              fieldName="email"
              label="Email"
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Email is incorrect",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              control={control}
              errors={errors}
              fieldName="nip"
              label="Tax number"
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 10,
                  message: "Tax number is incorrect",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              control={control}
              errors={errors}
              fieldName="phone"
              label="Numer telefonu"
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 9,
                  message: "Phone number is incorrect",
                },
              }}
            />
          </Grid>
        </Grid>

        <Button variant="contained" type="submit">
          confirm
        </Button>
      </StyledInnerBox>
    </StyledBox>
  );
};

export default CompanyForm;
