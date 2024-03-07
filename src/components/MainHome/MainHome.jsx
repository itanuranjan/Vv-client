import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Navbar1 from '../Navbar/Navbar1';
import Hero from './Hero';
import ResponsiveCardCarousel from "./ResponsiveCardCarousel";
import ResponsiveImageGallery from './ResponsiveImageGallery';
import Footer from '../Footer/Footer';



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
            <ResponsiveImageGallery/>
            <Footer/>

            
            </div>
        );
    }
}

export default MainHome;