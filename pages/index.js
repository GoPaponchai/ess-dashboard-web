import React from "react";
import { MyContext } from "@/context/MiddleContext";
import LeaveDashboard from "@/components/Pages/DashBoard/Leave";
import OvertimeDashboard from "@/components/Pages/DashBoard/Overtime";
import { LeaveDashboardProvider } from "@/context/LeaveDashboardContext";

const IndexPage = (props) => {
  const { t } = props;
  const { menu } = React.useContext(MyContext);

  return (
    <>
      <LeaveDashboardProvider>
        {menu === "leave" && <LeaveDashboard t={t} />}
      </LeaveDashboardProvider>
      {menu === "ot" && <OvertimeDashboard t={t} />}
    </>
  );
};

export default IndexPage;
