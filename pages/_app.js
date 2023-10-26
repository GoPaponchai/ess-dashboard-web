import "@/styles/globals.css";
import * as React from "react";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "@/components/Layout";
import { en, th } from "../public/locales";
import { MyContext, MyProvider } from "@/context.js/MiddleContext";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : th;

  return (
    <MyProvider>
      <Layout t={t} locale={locale}>
        <Component {...pageProps} locale={locale} t={t} />
      </Layout>
    </MyProvider>
  );
}
