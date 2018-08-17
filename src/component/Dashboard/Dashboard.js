import React, { Component } from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom';
import { connect } from 'tls';
import axios from 'axios';

export default class Dashboard extends Component {


    componentDidMount(){
        axios.get(`http://localhost:4000/houses`).then( res => {
            console.log (res.data)
            this.setState({
                houses: res.data
            });
        });
    }
    
    render(){

        return(
            <div>
            <div>Dashboard</div>
            <button><Link to='/wizard' className='links'>Add New Property</Link></button>
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


