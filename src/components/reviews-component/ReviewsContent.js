import React from 'react';
import OptionsContent from '../options-component/OptionsContent';
import reviewsData from '../../data/reviewsData';
import optionTextFormatting from '../../data/optionTextFormatting';



const ReviewsContent = () => {

    return (
        <div>
            <div className="speakers">
                speakers
            </div>
            <OptionsContent
                optionData={reviewsData}
                headingColors={["white"]}
                detailsColor={"black"}
                textFormat={optionTextFormatting.reviewsStyling}
            />
        </div>
    );
}

export default ReviewsContent;