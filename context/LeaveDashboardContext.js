import React, { createContext } from "react";
import { DateTime } from "luxon";

const LeaveDashboardContext = createContext();

const LeaveDashboardProvider = ({ children }) => {
  const date = new Date();
  const [year, setYear] = React.useState(DateTime.local(date).year);
  const [month, setMonth] = React.useState("0");
  const [employee, setEmployee] = React.useState(null);
  const [employeeList, setEmployeeList] = React.useState([]);
  const [chartData, setChartData] = React.useState({
    total: {
      total_day: 0,
      total_req: 0,
      data: [],
      label: [],
      backgroundColor: [],
    },
    approved: {
      total_day: 0,
      total_req: 0,
      data: [],
      label: [],
      backgroundColor: [],
    },
    pendding: {
      total_day: 0,
      total_req: 0,
      data: [],
      label: [],
      backgroundColor: [],
    },
  });
  return (
    <LeaveDashboardContext.Provider
      value={{
        year,
        setYear,
        month,
        setMonth,
        employee,
        setEmployee,
        employeeList,
        setEmployeeList,
        chartData,
        setChartData,
      }}
    >
      {children}
    </LeaveDashboardContext.Provider>
  );
};

export { LeaveDashboardProvider, LeaveDashboardContext };
