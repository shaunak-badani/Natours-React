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
import Card, { CardBack, CardDetails, CardFront, CardPicture, CardTitle } from './components/Card';

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
                <HeadingSecondary>
                    Most popular tours
                </HeadingSecondary>
            </CenterText>
            <Row>
              <Col length={1} total={3}>
                <Card>
                  <CardFront>
                    <CardPicture colorStyle={1}/>
                    <CardTitle colorStyle={1}>
                      The Sea Explorer
                    </CardTitle>
                    <CardDetails>
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </CardDetails>
                  </CardFront>
                  <CardBack colorStyle={1}>
                    <div className="cardPriceBox">
                      <p className="cardPriceOnly">Only</p>
                      <p className="cardPriceValue">$297</p>
                    </div>
                    <Button>
                      Book now!
                    </Button>
                  </CardBack>
                </Card>
              </Col>
              <Col length={1} total={3}>
                <Card>
                  <CardFront>
                    <CardPicture colorStyle={2}/>
                    <CardTitle colorStyle={2}>
                      The Forest Hiker
                    </CardTitle>
                    <CardDetails>
                      <ul>
                        <li>7 day tours</li>
                        <li>Up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: medium</li>
                      </ul>
                    </CardDetails>
                  </CardFront>
                  <CardBack colorStyle={2}>
                    <div className="cardPriceBox">
                      <p className="cardPriceOnly">Only</p>
                      <p className="cardPriceValue">$497</p>
                    </div>
                    <Button>
                      Book now!
                    </Button>
                  </CardBack>
                </Card>
              </Col>
              <Col length={1} total={3}>
                <Card>
                  <CardFront>
                    <CardPicture colorStyle={3}/>
                    <CardTitle colorStyle={3}>
                      The Snow Adventurer
                    </CardTitle>
                    <CardDetails>
                      <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: hard</li>
                      </ul>
                    </CardDetails>
                  </CardFront>
                  <CardBack colorStyle={3}>
                    <div className="cardPriceBox">
                      <p className="cardPriceOnly">Only</p>
                      <p className="cardPriceValue">$897</p>
                    </div>
                    <Button>
                      Book now!
                    </Button>
                  </CardBack>
                </Card>
              </Col>
            </Row>
            <CenterText classNames={["uMarginTopHuge"]}>
              <Button scheme="Green">
                Discover all tours
              </Button>
            </CenterText>
          </section>
        </main>
      </section>
    </>
  )
}

export default App
