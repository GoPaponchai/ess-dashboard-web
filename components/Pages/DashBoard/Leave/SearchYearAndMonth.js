import React from "react";
import { monthList } from "@/utils/constans";
import { mappingYear } from "@/utils/yearSelect";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useRouter } from "next/router";
import { LeaveDashboardContext } from "@/context/LeaveDashboardContext";

const SearchYearAndMonth = (props) => {
  const { t } = props;
  const {
    year,
    setYear,
    month,
    setMonth,
    employee,
    setEmployee,
    employeeList,
  } = React.useContext(LeaveDashboardContext);
  const { locale } = useRouter();

  const handleChangeYear = (e) => {
    setYear(e?.target?.value);
  };

  const handleChangeMonth = (e) => {
    setMonth(e?.target?.value);
  };

  const handleChangeEmployee = (e, newValue) => {
    setEmployee(newValue ? newValue : null);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        "& .MuiMenu-paper": {
          bgcolor: "red",
        },
      }}
    >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{t.year}</InputLabel>
        <Select
          value={year}
          onChange={handleChangeYear}
          label={t.year}
          MenuProps={{
            sx: {
              "&& .MuiMenu-paper": {
                backgroundColor: "white",
              },
            },
          }}
        >
          {mappingYear().map((year, index) => {
            return (
              <MenuItem value={year} key={index.toString()}>
                <em>{year}</em>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{t.month}</InputLabel>
        <Select
          value={month}
          onChange={handleChangeMonth}
          label={t.month}
          MenuProps={{
            sx: {
              "&& .MuiMenu-paper": {
                backgroundColor: "white",
              },
            },
          }}
        >
          {monthList.map((month, index) => {
            return (
              <MenuItem value={month.key} key={index.toString()}>
                <em>{locale === "en" ? month.nameEN : month.nameTH}</em>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Autocomplete
        value={employee?.label || null}
        options={employeeList}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.emp_id}>
              {option.label}
            </li>
          );
        }}
        sx={{ width: 300 }}
        onChange={handleChangeEmployee}
        isOptionEqualToValue={(option, value) => {
          return option.emp_id === value.emp_id;
        }}
        renderInput={(params) => (
          <TextField {...params} label={t.employee} variant="standard" />
        )}
      />
    </Stack>
  );
};

export default SearchYearAndMonth;
