import React, { Component } from 'react';
import route from './route';



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
