import "@/styles/globals.css";
import * as React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { en, th } from "../public/locales";
import { MyProvider } from "@/context/MiddleContext";

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
