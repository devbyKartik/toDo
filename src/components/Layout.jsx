import React, { Component } from 'react';

import ToDo from "./pages/toDo/ToDo";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      btnStatus: false
    }
  }
  handleChange = e => {
    this.setState({
      num: e.target.value
    });
  };
  
  render() {
    const { num, btnStatus } = this.state;
    return (
      <>
         <div className="container-fluid">
          <p>{num}</p>
          <input
            onChange={this.handleChange}
            type="number"
            value={num}
            placeholder="enter id here"
          />
          <button className="btn btn-info" onClick={() => { this.setState({ num: 5 }) }}>Ok!</button>
          <h1>Snapshort Testing</h1>
          <a
            className={btnStatus ? "btn btn-info" : "btn btn-success"}
            onClick={() => { this.setState({ btnStatus: !btnStatus }) }}
          > class change </a>

          <h2 className="hello1">hello</h2>
          
        </div>
        <ToDo />
      
      </>
    )
  }
}

export default Layout;
