import React, { Component } from 'react';
import Statname from './comp/Statname'

class App extends Component {
  constructor(){
    super();
    this.state={nama:''}
  }

  klik(){
    this.setState({nama: this.refs.nama.value});
  }

  render() {
    return (
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active">
                <a className="nav-link active" data-toggle="tab" href="#log">Login</a>
            </li>
            <li><a className="nav-link active" data-toggle="tab" href="#wel">Welcome</a></li>
          </ul>
          <div className="tab-content">
            <div id="log" className="tab-pane fade in active">
              <label for="namae">Nama</label> 
              <input className="form-control gaya" id="namae" ref="nama" type="text"/><br/>
              <button type="submit" className="btn btn-primary" onClick={()=>{this.klik();}}>Submit</button>
            </div>
            <div id="wel" className="tab-pane fade">
              <Statname nm={this.state.nama}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
