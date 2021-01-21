import React from 'react';

class Daily extends React.Component {
    render() {
        return(        
          <ul>
            <li> {this.props.data.date}  </li>
            <li> {this.props.data.temp_min} </li>
            <li> {this.props.data.temp_max} </li>
            <li> {this.props.description} </li>
          </ul>
        )
    }
}

export default Daily