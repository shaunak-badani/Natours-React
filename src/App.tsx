import './App.css'
import FrontBanner from './pages/FrontBanner';
import About from './pages/About'
import Row from './components/Row';
import Col from './components/Col';
import { HeadingTertiary } from './components/Headings';
import "./components/FeatureBox.scss";
import "./pages/Feature.scss";

function App() {
  return (
    <>
      <section>
        <FrontBanner />
        {/* <GridTest /> */}
        <main>
          <About />
          <section className="sectionFeatures">
            <Row>
              <Col length={1} total={4}>
                <div className="featureBox">
                  <i className="featureBoxIcon icon-basic-world" />
                  <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                    Explore the world
                  </HeadingTertiary>
                  <p className="featureBoxText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus!
                  </p>
                </div>
              </Col>
              <Col length={1} total={4}>
                <div className="featureBox">
                  <i className="featureBoxIcon icon-basic-compass" />
                  <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                    Meet Nature
                  </HeadingTertiary>
                  <p className="featureBoxText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus!
                  </p>
                </div>
              </Col>
              <Col length={1} total={4}>
                <div className="featureBox">
                  <i className="featureBoxIcon icon-basic-map" />
                  <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                    Find your way
                  </HeadingTertiary>
                  <p className="featureBoxText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus!
                  </p>
                </div>
              </Col>
              <Col length={1} total={4}>
                <div className="featureBox">
                  <i className="featureBoxIcon icon-basic-heart" />
                  <HeadingTertiary classNames={["uMarginBottomSmall"]}>
                    Live a healthier life
                  </HeadingTertiary>
                  <p className="featureBoxText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, unde doloremque non quo aut neque minus!
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </main>
      </section>
    </>
  )
}

export default App
