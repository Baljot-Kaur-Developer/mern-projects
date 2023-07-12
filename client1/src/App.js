import DataVisualization from "./components/DataVisualization";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          { /* ------------------------------------ ROUTES-------------------------------------------------------------------- */ }
          <Route exact path='/map' element={<DataVisualization />}></Route>
          </Routes>
          </Router>
          
    </div>
  );
}

export default App;
