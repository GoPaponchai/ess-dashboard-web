import React from "react";
import PropTypes from "prop-types";
import ChartLeave from "./ChartLeave";
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

const DetailLeaveBox = (props) => {
  const { title, subTitle, elementID, context, titleValue, day, hour } = props;
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
                }).format(titleValue)}
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
                }).format(day)}
                {" Day "}
                {new Intl.NumberFormat("th-th", {
                  maximumSignificantDigits: 10,
                }).format(hour)}
                {" Hour"}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
      <div className="relative h-350-px">
        <ChartLeave elementID={elementID} context={context} />
      </div>
    </Item>
  );
};

DetailLeaveBox.defaultProps = {
  title: "Title detail",
  subTitle: "Sub title",
  titileValue: "999",
  day: "999",
  hour: "99",
};

DetailLeaveBox.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  elementID: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  titleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default DetailLeaveBox;
