import React, { Component } from 'react';
import Hero from './Hero';
import TopCities from "./TopCities";
import TopRecommendations from './TopRecommendations';
import ResponsiveImageGallery from './ResponsiveImageGallery';
import ThingstoDo from './ThingstoDo';
import Location from './Location';
import Testimonials from './Quotes';
import WhyWeAre from './WhyWeAre';
import UserSuggestionForm from './UserSuggestionForm';
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
            <TopCities/>
            <TopRecommendations/>
            <ThingstoDo/>
            <ResponsiveImageGallery/>
            <Testimonials/>
            <WhyWeAre/>
            <UserSuggestionForm/>
            <Location/>
            {/* <CustomReviewCard/> */}
            {/* <Footer/> */}

            
            </div>
        );
    }
}

export default MainHome;