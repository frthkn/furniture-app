
import Head from 'next/head'
import About from './components/About'
import Pordutcs from "./components/Pordutcs";
import Contact from "./components/Contact";
import Categories from "./components/Categories";
import Slider from "./components/Slider";


export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Slider />
      <About />
      <Pordutcs />
      <Categories />
      <Contact />
    
      
    </>
  )
}
