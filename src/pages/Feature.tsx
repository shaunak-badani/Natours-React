import Col from "../components/Col";
import { HeadingTertiary } from "../components/Headings";
import Row from "../components/Row";
import FeatureBox, { FeatureBoxText, FeatureIcon } from "../components/FeatureBox";

const Feature = () => {
    return (
        <section className="sectionFeatures">
            <Row>
              <Col length={1} total={4}>
                <FeatureBox>
                  <FeatureIcon iconName="icon-basic-world" />
                  <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                    Explore the world
                  </HeadingTertiary>
                  <FeatureBoxText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus!
                  </FeatureBoxText>
                </FeatureBox>
              </Col>
              <Col length={1} total={4}>
                <FeatureBox>
                  <FeatureIcon iconName="icon-basic-compass" />
                  <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                    Meet Nature
                  </HeadingTertiary>
                  <FeatureBoxText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus!
                  </FeatureBoxText>
                </FeatureBox>
              </Col>
              <Col length={1} total={4}>
                <FeatureBox>
                  <FeatureIcon iconName="icon-basic-map" />
                  <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                    Find your way
                  </HeadingTertiary>
                  <FeatureBoxText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus!
                  </FeatureBoxText>
                </FeatureBox>
              </Col>
              <Col length={1} total={4}>
                <FeatureBox>
                  <FeatureIcon iconName="icon-basic-heart" />
                  <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                    Live a healthier life
                  </HeadingTertiary>
                  <FeatureBoxText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus!
                  </FeatureBoxText>
                </FeatureBox>
              </Col>
            </Row>
        </section>
    )
}

export default Feature;