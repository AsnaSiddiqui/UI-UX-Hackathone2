import Image from "next/image";
import Header from "./components/header/page"
import Home1 from "../app/home/page"
import Footer from "./components/footer/page";

export default function Home() {
  return (
        <div>
          <Header/>
          <Home1/>
          <Footer/>
        </div>
  );
}
