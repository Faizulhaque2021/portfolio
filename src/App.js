import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Count from './Components/Count/Count';
import Skill from './Components/Skill/Skill';
import Leaning from './Components/Learnings/Leaning';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <Count></Count>
      <Skill></Skill>
      <Leaning></Leaning> 
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
