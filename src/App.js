import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast'
import Autocomplete from 'react-google-autocomplete';
import Historic from './components/Historic'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Previsão do Tempo</h1>
         
        <Autocomplete
    style={{width: '50%'}}
    onPlaceSelected={(place) => {
      ReactDOM.unmountComponentAtNode(document.getElementById('daily'))
      ReactDOM.unmountComponentAtNode(document.getElementById('forecast'))
      ReactDOM.render(<Forecast city= {place.formatted_address} />, document.getElementById('forecast'));                        
    }}
    types={['(cities)']}
    componentRestrictions={{country: "br"}}
/>

        <button onClick={() => { 
          ReactDOM.unmountComponentAtNode(document.getElementById('historic'))
          ReactDOM.render(<Historic />, document.getElementById('historic') ) }} > Exibir Historico</button>

      </header>
      <div id="forecast"></div> 
      <div id='daily'></div>
      <div id='historic'></div>
    </div>
  );
}

export default App;
