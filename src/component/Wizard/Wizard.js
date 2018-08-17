import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            addressInput: '',
            cityInput: '',
            stateInput: '',
            nameInput: '',
            zipcodeInput: '',
        };
    

    
    }

    updateAddress(value) {
        this.setState({addressInput: value});
    }

    updateCity(value) {
        this.setState({cityInput: value});
    }

    updateState(value) {
        this.setState({stateInput: value});
    }

    updateName(value) {
        this.setState({nameInput: value});
    }

    updateZipcode(value) {
        this.setState({zipcodeInput: value});
    }

    render(){

        return(
            <div>
            <button>
            <Link to='/' className='links'>Cancel</Link>
            </button>
            <div>
                <input placeholder='Address' onChange={ ( e ) => this.updateAddress( e.target.value ) } value={ this.state.addressInput }  />
                <input placeholder='City' onChange={ ( e ) => this.updateCity( e.target.value ) } value={ this.state.cityInput }  />
                <input placeholder='State' onChange={ ( e ) => this.updateState( e.target.value ) } value={ this.state.stateInput }  />
                <input placeholder='Name' onChange={ ( e ) => this.updateName( e.target.value ) } value={ this.state.nameInput }  />
                <input placeholder='Zipcode' onChange={ ( e ) => this.updateZipcode( e.target.value ) } value={ this.state.zipcodeInput }  />
            <div>Wizard</div>

            </div>

            </div>
        )
    }
}