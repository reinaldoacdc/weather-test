import axios from 'axios';
import React from 'react';

class Historic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {}};
      }

      componentDidMount(){
        let getHistoric = async() => {
          let res = await axios.get(`https://my-api-weather.herokuapp.com/historic`);
          this.setState({data: res.data })
        }
        getHistoric();
      }  
      
      render(){
        const items = [];
        if (Object.keys(this.state.data).length > 0){
            this.state.data.map(function(row, i){
              console.log(row)
              items.push(
                <p> {`Você pesquisou previsão para ${row[1]} no dia ${row[2]} `} </p>
              )
            })
    
          }
        return(
            <div>
              <h3>Histórico Recente</h3>  
              {items}  
            </div>

        )
      }
}

export default Historic;