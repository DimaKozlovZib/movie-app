import './App.css';
import Header from './components/Header/header';
import Torch from './components/Torch/Torch';


function App() {
  return (
    <div className="App">
      <Header />
      <Torch textContant={
        <div>
          <h1>Movie app</h1>
          <h2>Easy movie search</h2>
        </div>
      } />
    </div>
  );
}

export default App;