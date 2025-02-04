import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
import Tabs from './components/Products/Products';
import About from "./components/About/About";
import Students from "./components/Students/Students";
import Newsletter from "./components/Newsletter/Newsletter";

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <Tabs />
      <About />
      {/* <Students /> */}
      {/* <Newsletter /> */}
    </main>
  )
}
