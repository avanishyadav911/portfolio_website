import {Navbar} from "./components/Navbar";
import {Hero} from "./pages/Hero";
import {About} from "./pages/About";
import {Portfolio} from "./pages/Portfolio";
import {Stack} from "./pages/Stack";
import {Footer} from "./components/Footer";

export default function App() {
   return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Stack/>
    <Footer/>
    </>
   )
}
