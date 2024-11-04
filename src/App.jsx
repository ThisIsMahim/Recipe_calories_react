import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {
  const mainRef = useRef(null);
  const scrollIntoMain=()=>{
    if(mainRef.current)
      mainRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="lg:px-32 py-11">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header scrollIntoMain={scrollIntoMain}/>
                <Hero scrollIntoMain={scrollIntoMain}/>
                <Main mainRef={mainRef} />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
