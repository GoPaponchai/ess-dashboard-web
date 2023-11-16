import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  Divider,
  Typography,
  Stack,
  Box,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  [theme.breakpoints.between("lg", "md")]: {
    width: "33%",
  },
}));

const EmptyChartBox = (props) => {
  const { title, subTitle } = props;
  return (
    <Item>
      <CardContent>
        <Stack spacing={1} justifyContent="">
          <Stack direction="row" spacing={1}>
            <Box>
              <Typography
                textAlign="left"
                sx={{ fontSize: "12px" }}
                variant="body1"
              >
                {title}
              </Typography>
              <Typography textAlign="left" variant="h5">
                {new Intl.NumberFormat("th-th", {
                  maximumSignificantDigits: 10,
                }).format("NAN")}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography
                textAlign="left"
                sx={{ fontSize: "12px" }}
                variant="body1"
              >
                {subTitle}
              </Typography>
              <Typography textAlign="center" variant="subtitle2">
                {new Intl.NumberFormat("th-th", {
                  maximumSignificantDigits: 10,
                }).format(Math.floor("NAN"))}
                {" Day "}
                {new Intl.NumberFormat("th-th", {
                  maximumSignificantDigits: 10,
                }).format("NAN")}
                {" Hour"}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
      <Stack height="30vh" justifyContent="center" alignItems="center">
        <Typography variant="h5">NO DATA</Typography>
      </Stack>
    </Item>
  );
};

EmptyChartBox.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default EmptyChartBox;
