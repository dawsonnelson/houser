import React, { Component } from 'react';
import route from './route';
import {Link} from 'react-router-dom';


import './App.css';
import Header from './component/Header/Header';
import Wizard from './component/Wizard/Wizard';


class App extends Component {
  constructor() {
    super();

    this.state = {
      isHidden: true

    };
    

    // this.AddProperty = this.AddProperty.bind(this);
    // this.Cancel = this.Cancel.bind(this);
  };
  
  toggleHidden (){
        this.setState({
            isHidden: !this.state.isHidden
        })
      }

  //  AddProperty = () => {
  //   this.setState()
  //  }

  render() {
    return (
      <div className="App">
        <Header />

        
        <button onClick={this.toggleHidden.bind(this)}>
        <Link to='/wizard' className='links'>Add New Property</Link>
        </button>
        {/* {!this.state.isHidden} */}

        <button onClick={this.toggleHidden.bind(this)}>
        <Link to='/' className='links'>Cancel</Link>
        </button>


        {route}
      </div>
    );
  }
}



// const Child = () => (
//   <div className='modal'>
//   </div>
// )

export default App;
