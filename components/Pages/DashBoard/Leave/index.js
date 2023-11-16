import React from "react";
import Script from "next/script";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchYearAndMonth from "./SearchYearAndMonth";
import DetailLeaveBox from "./DetailLeaveBox";
import { fetchEmplist } from "@/middleware/fetcher/master";
import { LeaveDashboardContext } from "@/context/LeaveDashboardContext";
import isEmpty from "is-empty";
import { fetchLeaveDashboard } from "@/middleware/fetcher/dashBoard";

const LeaveDashboard = (props) => {
  const { t } = props;
  const theme = useTheme();
  const { setEmployeeList, setChartData, employee, year, month, chartData } =
    React.useContext(LeaveDashboardContext);

  const fetchApi = async () => {
    const empList = await fetchEmplist();
    if (!isEmpty(empList?.data)) {
      setEmployeeList(empList?.data);
    }
    const chartDetail = await fetchLeaveDashboard({
      emp_id: employee?.emp_id,
      year,
      month,
    });
    if (!isEmpty(chartDetail?.data)) {
      setChartData(chartDetail?.data);
    }
  };

  const fetchChart = async () => {
    const chartDetail = await fetchLeaveDashboard({
      emp_id: employee?.emp_id,
      year,
      month,
    });
    if (!isEmpty(chartDetail?.data)) {
      setChartData(chartDetail?.data);
    }
  };

  React.useEffect(() => {
    fetchApi();
    fetchChart();
    return () => {};
  }, [employee, year, month]);

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
            chartData={chartData.total}
          />
          <DetailLeaveBox
            t={t}
            title={t.approve_leave}
            subTitle={t.dayAndHour}
            elementID="approved-chart-leave"
            context="2d"
            chartData={chartData.approved}
          />
          <DetailLeaveBox
            t={t}
            title={t.pending_leave}
            subTitle={t.dayAndHour}
            elementID="pendding-chart-leave"
            context="2d"
            chartData={chartData.pendding}
          />
        </Stack>
      </Paper>
      <Divider />
    </Stack>
  );
};

export default LeaveDashboard;
