import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from './Hero';
import ResponsiveCardCarousel from "./ResponsiveCardCarousel";



class MainHome extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div >
            <Navbar/>
            <Hero/>
            <ResponsiveCardCarousel/>
            
            </div>
        );
    }
}

export default MainHome;