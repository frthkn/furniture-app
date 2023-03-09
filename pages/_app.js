
import {useEffect, useState} from "react";
import { ThemeProvider } from 'next-themes'
import Navbar from "./components/Navbar";
import About from './components/About'
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Slider from "./components/Slider";
import "@/styles/globals.css";



export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
     <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      <Navbar />
      <Slider/>
      <About />
      <Categories />
      <Products />
      <Contact/>
      <Footer />
      {mounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}
