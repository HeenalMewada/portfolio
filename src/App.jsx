import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Hero_section from "./components/Hero_section.jsx";
import Projectcards from "./components/Projectcards.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Timeline from "./components/Timeline.jsx";

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