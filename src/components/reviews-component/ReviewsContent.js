import React from 'react';
import './reviewsContent.css'
import OptionsContent from '../options-component/OptionsContent';
import reviewsData from '../../data/reviewsData';
import optionTextFormatting from '../../data/optionTextFormatting';
import topSpeaker from '../../images/SmallSpeaker1-03.png';
import bottomSpeaker from '../../images/SmallSpeaker2-03.png';



const ReviewsContent = () => {

    return (
        <div>
        <div className="reviewLayout">
            <div className="reviewsImages">
                <img className="topSpeaker" src={topSpeaker} alt="left speaker" />
                <img className="bottomSpeaker" src={bottomSpeaker} alt="right speaker" />
            </div>
            <div className="userReviews">
            <OptionsContent
                optionData={reviewsData}
                headingColors={["white"]}
                detailsColor={"black"}
                textFormat={optionTextFormatting.reviewsStyling}
            />
            </div>
        </div>
        </div>
    );
}

export default ReviewsContent;