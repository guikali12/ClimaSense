import { useState }from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const[city, setCity] = useState("");
  const[weatherforecast, setweatherforecast] = useState(null)



  const handlechange = (e) => {
    setCity(e.target.value)
  }



  const dataDisplay = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=8a52862d4a9a466886a184211232108&q=${city}&lang=pt`)
    .then((response)=>{
      if(response.status === 200){
        return response.json()
      }
    })
    .then((data) => {
      console.log(data)
      setweatherforecast(data)
    });
  };

  return (
    <div className="container">
      <h1 className="title">Clima Sense</h1>
      <h3 className="subtitle">Digite o nome da sua cidade e descubra suas condições climáticas</h3>
      
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o nome da cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />

        <button className="Search" onClick={dataDisplay}>
          <FiSearch size={25} color="#000"/>
        </button>
      </div>

      { weatherforecast ? (
            <div>
              <div className="main">
              <div>
                <img src={weatherforecast.current.condition.icon}/>
              </div>
              <div>
                <h3>Condição : {weatherforecast.current.condition.text}</h3>
                <h3>Temperatura de : {weatherforecast.current.feelslike_c}ºC</h3>
                <h3>Umidade: {weatherforecast.current.humidity}%</h3>
                <h3>Para mais informações sobre o tempo: <a href='https://www.accuweather.com/pt/br/brazil-weather'>Acesse esse link</a></h3>
              </div>
            </div>
          </div>
          ) : null }
        </div>
     
  );
  
}

export default App;



