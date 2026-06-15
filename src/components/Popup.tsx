import "./Popup.scss";
import nat8 from "../assets/img/nat-8.jpg";
import nat9 from "../assets/img/nat-9.jpg";
import { HeadingSecondary, HeadingTertiary } from "./Headings";
import Button from "./Button";

const Popup = () => {

    return (
        <div className="popup" id="popup">
            <div className="popupContent">
                <div className="popupLeft">
                    <img src={nat8} alt="Tour photo" className="popupImg"/>
                    <img src={nat9} alt="Person photo" className="popupImg"/>
                </div>
                <div className="popupRight">
                    <a href="#sectionTours" className="popupClose">&times;</a>
                    <HeadingSecondary classNames={["uMarginBottomSmall"]}>
                        Start booking now
                    </HeadingSecondary>
                    <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                        Important &ndash; Please read these terms before booking
                    </HeadingTertiary>
                    <p className="popupText">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                    <Button scheme="Green">
                        Book now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Popup;

