
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" component={HomeScreen} />
    </div>
    </BrowserRouter>
  );
}

export default App;
