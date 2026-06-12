import Col from "../components/Col";
import Row from "../components/Row";

const GridTest = () => {

    return (
        <section>
            <Row>
                <Col length={1} total={2}>
                    Col 1 of 2
                </Col>
                <Col length={1} total={2}>
                    Col 1 of 2
                </Col>
            </Row>
            <Row>
                <Col length={1} total={3}>
                    Col 1 of 3
                </Col>
                <Col length={1} total={3}>
                    Col 1 of 3
                </Col>
                <Col length={1} total={3}>
                    Col 1 of 3
                </Col>
            </Row>
            <Row>
                <Col length={1} total={3}>
                    Col 1 of 3
                </Col>
                <Col length={2} total={3}>
                    Col 2 of 3
                </Col>
            </Row>
            <Row>
                <Col length={1} total={4}>
                    Col 1 of 4
                </Col>
                <Col length={1} total={4}>
                    Col 1 of 4
                </Col>
                <Col length={1} total={4}>
                    Col 1 of 4
                </Col>
                <Col length={1} total={4}>
                    Col 1 of 4
                </Col>
            </Row>
            <Row>
                <Col length={1} total={4}>
                    Col 1 of 4
                </Col>
                <Col length={3} total={4}>
                    Col 3 of 4
                </Col>
            </Row>
        </section>
    )
}

export default GridTest;