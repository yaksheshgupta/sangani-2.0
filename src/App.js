import './App.css';
import Content from './component/content';
import Landing from './component/landing';
import Navbar from './component/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      {/* <Content/> */}
    </div>
  );
}

export default App;
