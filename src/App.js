import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast'
import Autocomplete from 'react-google-autocomplete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
        <Autocomplete
    style={{width: '50%'}}
    onPlaceSelected={(place) => {
      ReactDOM.unmountComponentAtNode(document.getElementById('forecast'))
      ReactDOM.render(<Forecast city= {place.formatted_address} />, document.getElementById('forecast'));                        
    }}
    types={['(cities)']}
    componentRestrictions={{country: "br"}}
/>
      </header>
      
      <div id="forecast"></div> 
      <div id='daily'></div>
    </div>
  );
}

export default App;
