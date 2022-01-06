import './App.css';
import {useState} from "react";
import ReactDOM from 'react-dom';

function App() {
  const [location, setLocation] = useState("Chicago");

  async function handleSubmit(event){
    event.preventDefault();

    let api_key = process.env.REACT_APP_WEATHER_API_KEY;
    let url = "http://api.weatherstack.com/current?access_key=" + api_key + "&query=" + location + "&units=f";
    let response = await fetch(url)
        .catch(error => {
            console.log(error);
        });
    let data = await response.json();

    document.getElementById("submitForm").style.visibility= "hidden";
    document.getElementById("welcome").style.visibility= "hidden";
    /*ReactDOM.render(<button id="reset" onClick={window.location.reload()}>
      New Request
    </button>, document.getElementById("submitForm"));*/

    let insert = <div>
      <h3>{data.location.name}</h3>
      <h4>{data.location.country}</h4>
      <img src={data.current.weather_icons[0]} alt="Weather logo"></img>
      <p>{data.current.temperature}° and {(data.current.weather_descriptions[0]).toLowerCase()}</p>
      <p>Feels like {data.current.feelslike}°</p>
      <p>Wind speed at {data.current.wind_speed} mph</p>
    </div>

    ReactDOM.render(insert, document.getElementById("insert"));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} id="submitForm">
        <label>Enter location:
          <input
            type="text"
            placeholder="Chicago"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <input type="submit"/>
      </form>
      <div id="insert">
      </div>
      <h1 id="welcome">Welcome to Weather Check! Type in a city above to see their current weather.</h1>
    </div>
  );
}

export default App;
