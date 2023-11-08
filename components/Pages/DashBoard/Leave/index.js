import Script from "next/script";
import {
  Grid,
  Paper,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Chart from "chart.js";
import React from "react";
import SearchYearAndMonth from "./SearchYearAndMonth";
import "chartjs-plugin-labels";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const LeaveDashboard = (props) => {
  const { t } = props;
  const theme = useTheme();
  console.log("theme", theme);
  React.useEffect(() => {
    var config = {
      type: "doughnut",
      data: {
        labels: ["ลากิจ", "ลาป่วย", "ลาพักร้อน"],
        datasets: [
          {
            label: "My First Dataset",
            data: [2000, 1500, 500],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          labels: {
            render: "percentage",
            fontColor: ["black", "black", "black"],
            precision: 2,
          },
        },
        responsive: true,
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);

    return () => {};
  }, []);

  return (
    <Stack spacing={2}>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" />

      <Typography variant="h6">{t.leaveTitle}</Typography>
      <SearchYearAndMonth t={t} />
      <Paper
        elevation={2}
        sx={{
          width: "90vw",
          p: "2rem",
          bgcolor:
            theme.palette.mode === "dark" ? "" : theme.palette.primary[200],
        }}
      >
        <Stack container spacing={2} direction="row">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={4}>
                  <Item>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography
                          textAlign="center"
                          sx={{ fontSize: "12px" }}
                          variant="body1"
                        >
                          {t.total_leave}
                        </Typography>
                        <Typography textAlign="center" variant="h5">
                          {new Intl.NumberFormat("th-th", {
                            maximumSignificantDigits: 3,
                          }).format("6000")}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography
                          textAlign="center"
                          sx={{ fontSize: "12px" }}
                          variant="body1"
                        >
                          {t.pending_leave}
                        </Typography>
                        <Typography textAlign="center" variant="h5">
                          {new Intl.NumberFormat("th-th", {
                            maximumSignificantDigits: 3,
                          }).format("4000")}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography
                          textAlign="center"
                          sx={{ fontSize: "12px" }}
                          variant="body1"
                        >
                          {t.approve_leave}
                        </Typography>
                        <Typography textAlign="center" variant="h5">
                          {new Intl.NumberFormat("th-th", {
                            maximumSignificantDigits: 3,
                          }).format("2000")}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Item>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={8}>
              <Item>
                <div className="relative h-350-px">
                  <canvas id="line-chart"></canvas>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default LeaveDashboard;
