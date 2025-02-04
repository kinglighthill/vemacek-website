import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Tabs from './components/Products/Products';
import About from "./components/About/About";

export default function Home() {
  return (
    <main>
      <Banner />
      <Tabs />
      <About />
    </main>
  )
}
