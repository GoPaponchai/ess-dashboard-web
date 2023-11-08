import React from "react";
import { monthList } from "@/utils/constans";
import { mappingYear } from "@/utils/yearSelect";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { DateTime } from "luxon";
import { useRouter } from "next/router";

const SearchYearAndMonth = (props) => {
  const { t } = props;
  const date = new Date();
  const { locale } = useRouter();
  const [year, setYear] = React.useState(DateTime.local(date).year);
  const [month, setMonth] = React.useState("0");

  const handleChangeYear = (e) => {
    setYear(e?.target?.value);
  };

  const handleChangeMonth = (e) => {
    setMonth(e?.target?.value);
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
    </Stack>
  );
};

export default SearchYearAndMonth;
