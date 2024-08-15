import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="w-full ">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects/>
    </div>
  );
}

export default App;
