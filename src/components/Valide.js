
import "../App.css";
import Propos from "./a propos/propos";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Accueil from "./accueil/Accueil";
import Entreprise from "./entreprise/Entreprise";
import Localisation from "./localisation/Localisation";


function App() {
  return (
    <div className="App">
       <Accueil />
       <Propos/>
       <Entreprise />
       <Localisation/>
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
