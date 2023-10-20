import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Count from './Components/Count/Count';
import Skill from './Components/Skill/Skill';
import Leaning from './Components/Learnings/Leaning';

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
    </div>
  );
}

export default App;
