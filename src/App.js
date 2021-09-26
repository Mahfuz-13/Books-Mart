import './App.css';
// Importing Header files from component
import Header from './components/Header/Header'
// Importing main part
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      {/* This is the Header section */}
      <Header/>
      {/* Main part */}
      <Main/>
    </div>
  );
}

export default App;
