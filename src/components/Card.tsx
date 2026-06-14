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

const CardPicture = ({ cardUrl = defaultImage, colorStyle = 1 } : { cardUrl? : string, colorStyle?: number }) => {

    let cardPictureUrl = cardUrl;

    let currentStyle = 1;
    if([1,2,3].includes(colorStyle))
    {
        currentStyle = colorStyle;
    }

    const classForBack = `cardPicture${currentStyle}`;

    return (
        <div style={{ '--bg-image': `url(${cardPictureUrl})` } as CSSProperties }>
            <div 
                className={"cardPicture " + classForBack}
                >
                &nbsp;
            </div>
        </div>
    );
}

const CardTitle = ({ children, colorStyle = 1} : { children : ReactNode,  colorStyle: number }) => {

    let currentStyle = 1;
    if([1,2,3].includes(colorStyle))
    {
        currentStyle = colorStyle;
    }

    const classForBack = `cardHeadingSpan${currentStyle}`;

    return (
        <h4 className="cardHeading">
            <span className={"cardHeadingSpan " + classForBack}>
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

const CardBack = ({ children, colorStyle } : { children : ReactNode, colorStyle?: number }) => {

    let currentStyle = 1;
    if(colorStyle && [1,2,3].includes(colorStyle))
    {
        currentStyle = colorStyle;
    }

    const classForBack = `cardSideBack${currentStyle}`;

    return (
        <div className={"cardSide cardSideBack " + classForBack}>
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