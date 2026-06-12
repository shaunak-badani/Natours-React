import CenterText from "../components/CenterText";
import Col from "../components/Col";
import Row from "../components/Row";
import styles from "./About.module.scss";
import "../styles/UtilityClasses.css";

import { HeadingSecondary, HeadingTertiary } from "../components/Headings";
import Paragraph from "../components/Paragraph";
import { SecondaryButton } from "../components/Button";

const About = () => {

    return (
        <section className={styles.sectionAbout}>
            <CenterText classNames={["uMarginBottomBig"]}>
                <HeadingSecondary>
                    Exciting tours for adventurous people
                </HeadingSecondary>
            </CenterText>
            <Row>
                <Col length={1} total={2}>
                    <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                        You're going to fall in Love with Nature!
                    </HeadingTertiary>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus! Incidunt laudantium odit ipsam accusamus iusto quia, dolorem, quibusdam beatae quaerat id cumque.
                    </Paragraph>

                    <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                        Live adventures like you never have before
                    </HeadingTertiary>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta, reprehenderit aperiam, illum odio possimus id doloribus quae esse recusandae odit adipisci sapiente dolore quasi porro. Debitis corrupti itaque repellat.
                    </Paragraph>
                    <SecondaryButton>
                        Learn more &rarr;
                    </SecondaryButton>
                </Col>
                <Col length={1} total={2}>
                    Image composition
                </Col>
            </Row>
        </section>
    )
};

export default About;
