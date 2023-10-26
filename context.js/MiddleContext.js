import React, { createContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [menu, setMenu] = useState("ot");
  const [mode, setMode] = React.useState("light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <MyContext.Provider value={{ menu, setMenu, mode, setMode, colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
