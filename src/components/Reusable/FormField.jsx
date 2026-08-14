import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export default function FormField({
  name,
  label,
  control,
  rules,
  showHelperText = true,
  ...rest
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          value={field.value ?? ""}
          label={label}
          error={!!error}
          helperText={showHelperText ? error?.message : ""}
          fullWidth
          {...rest}
        />
      )}
    />
  );
}
