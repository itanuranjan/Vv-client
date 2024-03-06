import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Navbar1 from '../Navbar/Navbar1';
import Hero from './Hero';
import ResponsiveCardCarousel from "./ResponsiveCardCarousel";



class MainHome extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div >
            {/* <Navbar/> */}
            <Navbar1/>
            <Hero/>
            <ResponsiveCardCarousel/>
            
            </div>
        );
    }
}

export default MainHome;