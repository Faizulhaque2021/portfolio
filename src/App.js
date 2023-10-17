import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Count from './Components/Count/Count';
import Leaning from './Components/Learnings/Leaning';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <Count></Count>
      <Leaning></Leaning>
    </div>
  );
}

export default App;
