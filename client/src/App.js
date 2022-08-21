
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landingimg from './assets/Landingimg.png';


function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navigation />
      <div className="section-center">
        <img className="img" src={Landingimg} alt="Landingimg" />
        <div>
          <Button variant="outline-dark" onClick={() => navigate("create")}> Create a post!</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
