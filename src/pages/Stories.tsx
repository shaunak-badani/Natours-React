import CenterText from "../components/CenterText";
import { HeadingSecondary, HeadingTertiary } from "../components/Headings";
import Row from "../components/Row";
import "./Stories.scss";
import nat8 from "../assets/img/nat-8.jpg";

const Stories = () => {

    return (
        <section className="sectionStories">
            <CenterText classNames={["uMarginBottomBig"]}>
                <HeadingSecondary>
                    We make people genuinely happy
                </HeadingSecondary>
            </CenterText>
            <Row>
                <div className="story">
                    <figure className="storyShape">
                        <img src={nat8} alt="Person on a tour" className="storyImage"/>
                    </figure>
                    <div className="storyText">
                        <HeadingTertiary classNames={["uMarginBottomSmall"]}> 
                            I had the best week with my friend!
                        </HeadingTertiary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia id pariatur laborum eaque laboriosam amet quibusdam atque iure ullam. Minima excepturi necessitatibus odio saepe aliquam natus dolor at architecto! Minima excepturi necessitatibus odio saepe aliquam natus dolor at architecto!
                        </p>
                    </div>
                </div>
            </Row>
        </section>
    )
}

export default Stories;