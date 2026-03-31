import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Hero_section from "./components/Hero_section";
import Projectcards from "./components/Projectcards";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";

function App(){
  return(
<>
      <Header></Header>
      <Hero_section></Hero_section>
      <Projectcards></Projectcards>
      <Skills></Skills>
      <Timeline></Timeline>
      <Contact></Contact>
    </>
  )
}

export default App;