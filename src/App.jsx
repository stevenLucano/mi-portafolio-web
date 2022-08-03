import "./App.css";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Portafolio from "./components/Portafolio";

function App() {
  const body = document.querySelector("body");
  body.addEventListener("click", (e) => {
    // console.log(e.target.classList.contains("navbar"));
    if (
      !(
        e.target.classList.contains("navbar") ||
        e.target.classList.contains("btn-float")
      )
    ) {
      const navbar = document.querySelector(".navbar");
      const btn = document.querySelector(".btn-float");
      navbar.classList.remove("navbar-open");
      btn.classList.remove("btn-float-open");
    }
  });
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;
