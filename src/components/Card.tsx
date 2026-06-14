import type { CSSProperties, ReactNode } from "react";
import defaultImage from "../assets/img/nat-5.jpg";

const Card = ({ children } : { children : ReactNode}) => {

    return (
        <div className="card">
            {children}
        </div>
    );
}

const CardFront = ({ children } : { children : ReactNode}) => {

    return (
        <div className="cardSide cardSideFront">
            {children}
        </div>
    );
}

const CardPicture = ({ cardUrl } : { cardUrl? : string }) => {

    let cardPictureUrl = cardUrl || defaultImage;
    console.log("cardPicture Url : ", cardPictureUrl);

    return (
        <div style={{ '--bg-image': `url(${cardPictureUrl})` } as CSSProperties }>
            <div 
                className="cardPicture"
                 >
                &nbsp;
            </div>
        </div>
    );
}

const CardTitle = ({ children } : { children : ReactNode }) => {

    return (
        <h4 className="cardHeading">
            <span className="cardHeadingSpan cardHeadingSpan1">
                {children}
            </span>
        </h4>
    )
}

const CardDetails = ({ children } : { children : ReactNode }) => {

    return (
        <div className="cardDetails">
            {children}
        </div>
    )
}

const CardBack = ({ children } : { children : ReactNode }) => {

    return (
        <div className="cardSide cardSideBack cardSideBack1">
            <div className="cardCta">
                {children}
            </div>
        </div>
    )
}

const CardBox = ({ children } : { children : ReactNode }) => {

    return (
        <div className="cardSide cardSideBack cardSideBack1">
            <div className="cardCta">
                {children}
            </div>
        </div>
    )
}


export default Card;

export { CardFront, CardPicture, CardTitle, CardDetails, CardBack };