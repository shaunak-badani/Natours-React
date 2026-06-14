import "./BackgroundVideo.scss";
import defaultVidMp4 from "../assets/img/video.mp4";
import defaultVidWebm from "../assets/img/video.webm";
import type { ReactNode } from "react";

type PropType = { 
    children: ReactNode; 
    classNames?: string[]; 
};

// you can download free to use videos from coverr.co
const BackgroundVideo = ({children, classNames = []}: PropType) => {

    const allClasses: string = `parentBgVideo ${classNames.join(' ')}`; 

    return (
        <section className={allClasses}>
            <div className="bgVideo">
                <video className="bgVideoContent" autoPlay muted loop>
                    <source src={defaultVidMp4} type="video/mp4" />
                    <source src={defaultVidWebm} type="video/webm" />
                    Your browser is not supported!
                </video>    
            </div>
            {children}
        </section>
    )
}

export default BackgroundVideo;