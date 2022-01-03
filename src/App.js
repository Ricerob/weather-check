import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [location, setLocation] = useState("Chicago");

  const handleSubmit = (event) => {
    event.preventDefault();
    //Get weather data based on user input
    alert(location);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Enter location:
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <input type="submit"/>
      </form>
      <h3>{location}</h3>
    </div>
  );
}

export default App;
