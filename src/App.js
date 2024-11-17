import "./App.css";
import Education from "./components/education";
import Header from "./components/header";
import About from "./components/page/about";
import Contact from "./components/page/contact";

import Footer from "./components/page/footer";
import Profile from "./components/page/profile";
import Skills from "./components/page/skill";

function App() {
  return (
    <div>
      <Header/>
      <div className="page-content">
        <div>
          <Profile/>
          <About/>
          <Skills/>
          <Education/>

          <Contact/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
