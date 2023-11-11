import "./App.css"
import Content from './components/content'
import Navbar from "./components/navbar";
function App() {
  const Login = ()=>{
    console.log("Login attempt");
  }
  return (
    <div className="App">
    <Navbar onLogin={Login}/>
    <Content/>
    </div>
  );
}

export default App;
