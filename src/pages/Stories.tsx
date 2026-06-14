import CenterText from "../components/CenterText";
import { HeadingSecondary, HeadingTertiary } from "../components/Headings";
import Row from "../components/Row";
import "./Stories.scss";
import nat8 from "../assets/img/nat-8.jpg";
import nat9 from "../assets/img/nat-9.jpg";
import Story, { StoryFigure, StoryText } from "../components/Story";
import { SecondaryButton } from "../components/Button";
import BackgroundVideo from "../components/BackgroundVideo";

const Stories = () => {

    return (
        <BackgroundVideo classNames={["sectionStories"]}>
            <CenterText classNames={["uMarginBottomBig"]}>
                <HeadingSecondary>
                    We make people genuinely happy
                </HeadingSecondary>
            </CenterText>
            <Row>
                <Story>
                    <StoryFigure
                        imageSrc={nat8}
                        imageCaption="Mary Smith" />
                    <StoryText>
                        <HeadingTertiary classNames={["uMarginBottomSmall"]}> 
                            I had the best week with my family!
                        </HeadingTertiary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia id pariatur laborum eaque laboriosam amet quibusdam atque iure ullam. Minima excepturi necessitatibus odio saepe aliquam natus dolor at architecto!
                        </p>
                    </StoryText>
                </Story>
            </Row>
            <Row>
                <Story>
                    <StoryFigure
                        imageSrc={nat9}
                        imageCaption="Jack Wilson" />
                    <StoryText>
                        <HeadingTertiary classNames={["uMarginBottomSmall"]}> 
                            Wow! My life is completely different now
                        </HeadingTertiary>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia id pariatur laborum eaque laboriosam amet quibusdam atque iure ullam. Minima excepturi necessitatibus odio saepe aliquam natus dolor at architecto!
                        </p>
                    </StoryText>
                </Story>
            </Row>
            <CenterText classNames={["uMarginTopHuge"]}>
                <SecondaryButton>
                    Read all stories &rarr;
                </SecondaryButton>
            </CenterText>
        </BackgroundVideo>
    )
}

export default Stories;