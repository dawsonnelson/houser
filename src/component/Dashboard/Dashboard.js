import React, { Component } from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom';
import { connect } from 'tls';

export default class Dashboard extends Component {

    
    render(){

        return(
            <div>
            <div>Dashboard</div>
            <House />
            </div>
        )

        // function mapStateToProps(state) {
        //     return{
        //         address: state.address,
        //         city: state.city,
        //         state: state.state,
        //         name: state.name,
        //         zipcode: state.zipcode
        //     };
        
        // }
    }
}


