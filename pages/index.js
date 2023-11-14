import React from "react";
import { MyContext } from "@/context.js/MiddleContext";
import LeaveDashboard from "@/components/Pages/DashBoard/Leave";
import OvertimeDashboard from "@/components/Pages/DashBoard/Overtime";
import { Box } from "@mui/material";

const IndexPage = (props) => {
  const { t } = props;
  const { menu } = React.useContext(MyContext);

  return (
    <>
      {menu === "leave" && <LeaveDashboard t={t} />}
      {menu === "ot" && <OvertimeDashboard t={t} />}
    </>
  );
};

export default IndexPage;
