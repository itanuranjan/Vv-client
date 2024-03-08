import React, { Component } from 'react';
import Hero from '../../MainHome/Hero';
import TopPlaceVaranasi from './Top-PlacesVaranasi';
import ThingToDo from './Things-To-Do';
import TopRecommendations from '../../MainHome/TopRecommendations';
import ResponsiveImageGallery from '../../MainHome/ResponsiveImageGallery';
// import CustomReviewCard from './Review';



class Varanasi extends Component{
    
    render(){
        return(
            <div >
         
           
            
            <Hero/>
            <TopPlaceVaranasi/>
            <ThingToDo/>
            <TopRecommendations/>
            <ResponsiveImageGallery/>
            {/* <CustomReviewCard/> */}
        

            
            </div>
        );
    }
}

export default Varanasi;