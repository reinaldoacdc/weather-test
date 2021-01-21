import React from 'react';
import './Daily.css'

class Daily extends React.Component {
    render() {
        return(        
          <div>
            <h3>Previsão do dia: {this.props.data.date}</h3>
            
            <p> Mínima: {this.props.data.temp_min}ºC </p>
            
            <p> Máxima: {this.props.data.temp_max}ºC </p>
            <p> Descrição: {this.props.data.description} </p>
            <p> Pressão: {this.props.data.pressure}hPa </p>
            <p> Humidade: {this.props.data.humidity}(%)) </p>
            
          </div>
        )
    }
}

export default Daily