import React, { Component } from 'react';
import Hero from './Hero';
import ResponsiveCardCarousel from "./ResponsiveCardCarousel";
import TopRecommendations from './TopRecommendations';
import ResponsiveImageGallery from './ResponsiveImageGallery';
import Card3 from './Card3';
// import CustomReviewCard from './Review';
// import Marquee from './Marquee';



class MainHome extends Component{
    
    render(){
        return(
            <div >
            {/* <Navbar/> */}
            {/* <Navbar1/> */}
            
            <Hero/>
            {/* <Marquee/> */}
            <ResponsiveCardCarousel/>
            <TopRecommendations/>
            <Card3/>
            <ResponsiveImageGallery/>
            {/* <CustomReviewCard/> */}
            {/* <Footer/> */}

            
            </div>
        );
    }
}

export default MainHome;