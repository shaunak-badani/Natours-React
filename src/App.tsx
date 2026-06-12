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
                    Front
                  </div>
                  <div className="cardSide cardSideBack cardSideBack1">
                    Back
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
