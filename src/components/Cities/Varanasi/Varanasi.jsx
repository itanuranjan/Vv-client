import React, { Component } from 'react';
import Hero from '../../MainHome/Hero';
import TopPlaceVaranasi from './Top-PlacesVaranasi';
import ThingToDo from './Things-To-Do';
import TopRecommendations from '../../MainHome/TopRecommendations';
import ResponsiveImageGallery from '../../MainHome/ResponsiveImageGallery';
import HeroVaranasi from './HeroVanarasi';
import TopCitiesVaranasi from './TopPlacesVaranasi';
import TopRecommentVaranasi from './TopRecommentVaranasi';
import HistoricalPlacesVaranasi from './HistoricalPlacesVaranasi';
import ReviewsVaranasi from './ReviewsVaranasi';
import FaqsVaranasi from './FaqsVaranasi';
import ExpenseCalculator from '../../MainHome/ExpenseCalculator';
import CategoriesVaranasi from './CategoriesVaranasi';
// import CustomReviewCard from './Review';



class Varanasi extends Component{
    
    render(){
        return(
            <div >
         
           
            
            <HeroVaranasi/>
            <TopCitiesVaranasi/>
            <TopRecommentVaranasi/>
            <ThingToDo/>
            <HistoricalPlacesVaranasi/>
            <TopRecommendations/>
            <ReviewsVaranasi/>
            <FaqsVaranasi/>
            <ExpenseCalculator/>
            <ResponsiveImageGallery/>
            <CategoriesVaranasi/>
            {/* <CustomReviewCard/> */}
        

            
            </div>
        );
    }
}

export default Varanasi;