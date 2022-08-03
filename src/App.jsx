import "./App.css";
import Contacto from "./components/Contacto";
import InfoProyecto from "./components/InfoProyecto";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Portafolio from "./components/Portafolio";

function App() {
  const body = document.querySelector("body");

  window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    const port = document.getElementById("portafolio");
    if (window.scrollY >= 330) {
      // port.style.color = "#fff";
    }
  });

  body.addEventListener("click", (e) => {
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
      <InfoProyecto />
      <Navbar />
      <Inicio />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;
