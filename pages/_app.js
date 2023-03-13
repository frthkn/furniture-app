import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "./layout/Layout";

import "@/styles/globals.css";

 function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <Layout>{mounted && <Component {...pageProps} />}</Layout>
      </ThemeProvider>
    </>
  );
}

export default App;