import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";


const App = () => {
  return <div>
    <Cursor />
    <section id="Home">
      <Navbar />
      <Hero />
      </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services /></section>
    <section id="Projects"><Parallax type="projects"/></section>
    <Project />
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
