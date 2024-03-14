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
import CustomReviewCard from './Review';
import FaqPage from './Faq';
import BrowseByTheme from './BrowseByTheme';
import BrowseByThemeTop from './BrowseByThemeTop';
// import Marquee from './Marquee';
import Spiner from '../Spiner';
import CardGallery from './CardGallary';



class MainHome extends Component{
    
    render(){
        return(
            <div >
            {/* <Navbar/> */}
            {/* <Navbar1/> */}
            <Hero/>
            {/* <Spiner/> */}
            {/* <Marquee/> */}
            <BrowseByThemeTop/>
            <TopCities/>
            <TopRecommendations/>
            <ThingstoDo/>
            <ResponsiveImageGallery/>
            <Testimonials/>
            <WhyWeAre/>
            <UserSuggestionForm/>
            <Location/>
            <CustomReviewCard/>
            <FaqPage/>
            <BrowseByTheme/>
            <CardGallery/>


            {/* <Footer/> */}

            
            </div>
        );
    }
}

export default MainHome;