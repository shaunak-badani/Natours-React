import type { ReactNode } from "react";
import "./Story.scss";


const Story = ({ children } : { children : ReactNode }) => {

    return (
        <div className="story">
            {children}
        </div>
    )
}

const StoryFigure = ({ imageSrc, imageCaption } : { imageSrc : string, imageCaption : string }) => {
    return (
        <figure className="storyShape">
            <img src={imageSrc} alt="Person on a tour" className="storyImage"/>
            <figcaption className="storyCaption">
                {imageCaption}
            </figcaption>
        </figure>
    )
}

const StoryText = ({ children } : { children : ReactNode}) => {

    return (
        <div className="storyText">
            {children}
        </div>
    )
}

export default Story;

export { StoryFigure, StoryText };