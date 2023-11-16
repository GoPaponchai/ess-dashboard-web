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
import isEmpty from "is-empty";

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
  const { title, subTitle, elementID, context, chartData } = props;

  if (!isEmpty(chartData.data)) {
    const hourParse =
      parseInt(chartData.total_day.toFixed(3).split(".")[1], 10) > 0
        ? parseInt(chartData.total_day.toFixed(3).split(".")[1], 10) / 125
        : parseInt(chartData.total_day.toFixed(3).split(".")[1], 10);
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
                  }).format(chartData.total_req)}
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
                  }).format(Math.floor(chartData.total_day))}
                  {" Day "}
                  {new Intl.NumberFormat("th-th", {
                    maximumSignificantDigits: 10,
                  }).format(hourParse)}
                  {" Hour"}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
        <div className="relative h-350-px">
          <ChartLeave
            elementID={elementID}
            context={context}
            label={chartData.label}
            data={chartData.data}
            backgroundColor={chartData.backgroundColor}
          />
        </div>
      </Item>
    );
  } else {
    <div>dowload</div>;
  }
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
  chartData: PropTypes.object.isRequired,
};
export default DetailLeaveBox;
