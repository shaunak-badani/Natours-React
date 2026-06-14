import './App.css'
import FrontBanner from './pages/FrontBanner';
import About from './pages/About'
import "./pages/Feature.scss";
import Feature from './pages/Feature';
import CenterText from './components/CenterText';
import { HeadingSecondary } from './components/Headings';
import Row from './components/Row';
import Col from './components/Col';
import "./pages/Tours.scss";
import "./components/Card.scss";
import Button from './components/Button';

function App() {
  return (
    <>
      <section>
        <FrontBanner />
        {/* <GridTest /> */}
        <main>
          <About />
          <Feature />
          <section className="sectionTours">
            <CenterText classNames={["uMarginBottomBig"]}>
                <HeadingSecondary >
                    Most popular tours
                </HeadingSecondary>
            </CenterText>
            <Row>
              <Col length={1} total={3}>
                <div className="card">
                  <div className="cardSide cardSideFront">
                    <div className="cardPicture cardPicture1">
                      &nbsp;
                    </div>
                    <h4 className="cardHeading">
                      <span className="cardHeadingSpan cardHeadingSpan1">
                        The Sea Explorer
                      </span>
                    </h4>
                    <div className="cardDetails">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="cardSide cardSideBack cardSideBack1">
                    <div className="cardCta">
                      <div className="cardPriceBox">
                        <p className="cardPriceOnly">Only</p>
                        <p className="cardPriceValue">$297</p>
                      </div>
                      <Button text="Book now!" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col length={1} total={3}>Col 1 of 3</Col>
              <Col length={1} total={3}>Col 1 of 3</Col>
            </Row>
          </section>
        </main>
      </section>
    </>
  )
}

export default App
