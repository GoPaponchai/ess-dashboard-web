import React from "react";
import Script from "next/script";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchYearAndMonth from "./SearchYearAndMonth";
import DetailLeaveBox from "./DetailLeaveBox";

const LeaveDashboard = (props) => {
  const { t } = props;
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" />

      <Typography variant="h6">{t.leaveTitle}</Typography>
      <SearchYearAndMonth t={t} />
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          p: "2rem",
          bgcolor:
            theme.palette.mode === "dark" ? "" : theme.palette.primary[200],
        }}
      >
        <Stack direction={{ lg: "row", xs: "column" }} spacing={2}>
          <DetailLeaveBox
            t={t}
            title={t.total_leave}
            subTitle={t.dayAndHour}
            elementID="total-chart-leave"
            context="2d"
            titleValue="6000"
            day="6500"
            hour="18"
          />
          <DetailLeaveBox
            t={t}
            title={t.approve_leave}
            subTitle={t.dayAndHour}
            elementID="approved-chart-leave"
            context="2d"
            titleValue="5500"
            day="5500"
            hour="14"
          />
          <DetailLeaveBox
            t={t}
            title={t.pending_leave}
            subTitle={t.dayAndHour}
            elementID="pendding-chart-leave"
            context="2d"
            titleValue="500"
            day="1000"
            hour="4"
          />
        </Stack>
      </Paper>
      <Divider />
    </Stack>
  );
};

export default LeaveDashboard;
