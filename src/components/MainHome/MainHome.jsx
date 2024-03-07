import React, { Component } from 'react';
import Hero from './Hero';
import ResponsiveCardCarousel from "./ResponsiveCardCarousel";
import TopRecommendations from './TopRecommendations';
import ResponsiveImageGallery from './ResponsiveImageGallery';
import Card3 from './Card3';
import CustomReviewCard from './Review';



class MainHome extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div >
            {/* <Navbar/> */}
            {/* <Navbar1/> */}
            
            <Hero/>
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