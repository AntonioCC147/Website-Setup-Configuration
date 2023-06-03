import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/header';

import Home from "./pages/home/home";
import DespreMine from "./pages/despreMine/despreMine";
import Algoritmi from "./pages/algoritmi/algoritmi";
    import ClasaIX from "./pages/algoritmi/clasaIX";
    import ClasaX from "./pages/algoritmi/clasaX";
    import ClasaXI from "./pages/algoritmi/clasaXI";
    import Atestat from "./pages/algoritmi/atestat";
import Meditatii from "./pages/meditatii/meditatii";
import Portofoliu from "./pages/portofoliu/portofoliu";
import Compileaza from "./pages/compileaza/compileaza";
import Contact from "./pages/contact/contact";

import Footer from './components/footer/footer';

import './App.css';

function App() {
    return (
        <div className="background">
            <Header/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/despremine" element={<DespreMine/>}></Route>
                    <Route path="/algoritmi" element={<Algoritmi/>}></Route>
                        <Route path="/clasaix" element={<ClasaIX/>}></Route>
                        <Route path="/clasax" element={<ClasaX/>}></Route>
                        <Route path="/clasaxi" element={<ClasaXI/>}></Route>
                        <Route path="/atestat" element={<Atestat/>}></Route>
                    <Route path="/meditatii" element={<Meditatii/>}></Route>
                    <Route path="/portofoliu" element={<Portofoliu/>}></Route>
                    <Route path="/atestat" element={<Atestat/>}></Route>
                    <Route path="/compileaza" element={<Compileaza/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;