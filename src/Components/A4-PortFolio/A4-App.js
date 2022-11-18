import Home from "./Pages/Home/Home";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Intro from "./Pages/Intro/Intro";
import Services from "./Pages/Services/Services";
import Cv from "./Pages/CV/Cv";
import Contact from "./Pages/Contact/Contact";
import Welcome from "./Pages/Welcome/Welcome";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route index element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/services" element={<Services />} />
            <Route path='/cv' element={<Cv />} />
            <Route path="/contact" element={<Contact/>}/>
    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
