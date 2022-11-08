import React from "react";
import bgImage  from '../assets/bgImage.png';


export const BackgroundContainer =React.memo(() => {
    return (
        <div className="bg-container">
            <img src={bgImage} alt="background"/>
        </div>
    )
})