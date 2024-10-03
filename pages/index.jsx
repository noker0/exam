import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Categoria from "@/components/Categoria";
import AboutUs from "@/components/AboutUs";
import OurProduct from "@/components/OurProduct";
import Otz from "@/components/Otz";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
     <Navbar/>
     <Main/>
     <Categoria/>
     <AboutUs/>
     <OurProduct/>
     <Otz/>
     <ContactUs/>
     <Footer/>
    </>
  );
}
