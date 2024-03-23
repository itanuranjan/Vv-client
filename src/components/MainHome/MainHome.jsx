import React, { Component } from 'react';
import Hero from './Hero';
import TopCities from "./TopCities";
import TopRecommendations from './TopRecommendations';
// import ResponsiveImageGallery from './ResponsiveImageGallery';
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
// import Spiner from '../Spiner';
// import CardGallery from './CardGallary';
import QueryForm from './QueryForm';
// import Navbar1 from '../Navbar/Navbar';
import WeatherWidget from './WeatherWidget';
import HistoricalPlaces from './HistoricalPlaces';
import EuropeGroupTourCard from './Packege';
import AllPlacesPackages from './TourPackage';
import ExpenseCalculator from './ExpenseCalculator';


class MainHome extends Component{
    
    render(){
        return(
            <div >
            {/* <Navbar/> */}
            {/* <Navbar1/> */}
            <Hero/>
            {/* <Spiner/> */}
            {/* <Marquee/> */}
            {/* <Navbar1/> */}
            <BrowseByThemeTop/>
            <TopCities/>
            <AllPlacesPackages/>
            <TopRecommendations/>
            <ThingstoDo/>
            <HistoricalPlaces/>
            <EuropeGroupTourCard/>
            <WhyWeAre/>
            <CustomReviewCard/>
            {/* <ResponsiveImageGallery/> */}
            <Testimonials/>
            {/* <UserSuggestionForm/> */}
            <Location/>
            <FaqPage/>
            <BrowseByTheme/>
            {/* <CardGallery/> */}
            <QueryForm/>
            {/* <ExpenseCalculator/> */}
            {/* <WeatherWidget/> */}



            {/* <Footer/> */}

            
            </div>
        );
    }
}

export default MainHome;