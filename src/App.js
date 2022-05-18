import { Routes, Route} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Valide from "./components/Valide"
// import Success from './components/Success'
import Registre from "./components/Registre";
import TestForm from "./components/TestForm"



function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Registre/>} />
      <Route path="/registre" element={Registre} />
      <Route path="/Valide" element={<Valide />} />
      <Route path="/TestForm" element={<TestForm />} />

    </Routes>
    </BrowserRouter></>
   

  );
}

export default App;
