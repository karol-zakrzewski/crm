import { TextField } from "@mui/material";
import { FC } from "react";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { FieldNames } from "../../../types/general";
import { AddCompanyFormTypes } from "../../../types/types";

type Rules = {
  required: {
    value: boolean;
    message: string;
  };
  minLength: {
    value: number;
    message: string;
  };
  pattern: {
    value: RegExp;
    message: string;
  };
};

type Props = {
  control: Control<AddCompanyFormTypes>;
  errors: FieldErrorsImpl<AddCompanyFormTypes>;
  fieldName: FieldNames;
  label: string;
  rules: Partial<Rules>;
};

const TextInput: FC<Props> = ({ control, errors, fieldName, label, rules }) => {
  const a = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          error={errors[fieldName] ? true : undefined}
          helperText={errors[fieldName] && errors[fieldName]?.message}
          {...field}
        />
      )}
    />
  );
};

export default TextInput;
