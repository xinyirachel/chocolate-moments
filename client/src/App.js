
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Time from './components/Time';
import Landingimg from './assets/Landingimg.png';


function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
       <Navigation />
       
       <div className="section-center">
        <p>“Life is like a box of chocolates, you never know what you're going to get.”</p>
       <img className="img" src={Landingimg} alt="Landingimg"/>
       <div className="grid">
         <Time />
         <Button variant="outline-dark" onClick={() => navigate("create")}> Share your moments!</Button>
       </div>
       </div>
    </div>
  );
}

export default App;
