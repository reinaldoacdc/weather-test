import ReactDOM from 'react-dom'
import Daily from './Daily'
import axios from 'axios';
import React from 'react';

class Forecast extends React.Component {
  
  constructor(props) {
    super(props);    
    this.state = {city: this.props.city, weather: {}};
  }

  componentDidMount(){
    let getWeather = async() => {
      let res = await axios.get(`https://my-api-weather.herokuapp.com/forecast/${this.props.city}`);
      this.setState({weather: res.data })
    }
    getWeather();
  }

    render() {
      const items = [];
      if (Object.keys(this.state.weather).length > 0){
        this.state.weather['list'].map(function(daily, i){
          console.log('**')
          console.log(daily)
          items.push(
            <tr>
              <td> {daily.date}  </td>
              <td> {daily.temp_min} </td>
              <td> {daily.temp_max} </td>
              <td> {daily.description} </td>
              <td> <button onClick={() => { ReactDOM.render(<Daily data={daily} />, document.getElementById('daily') ) }} > Detalhes</button> </td>
            </tr>
          )
        })

      }
           
      
      return (
        <div>
          <p>Previsão do tempo | {this.props.city} </p>
          <table>
            <tr>
              <th>Dia</th>
              <th>Minima</th> 
              <th>Máxima</th>
            </tr>
            {items}
          </table>
        </div>
      )
    }
  }

export default Forecast;