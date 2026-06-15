import Form, { FormGroup, FormLabel, Input } from "../components/Form";
import { HeadingSecondary } from "../components/Headings";
import Row from "../components/Row";
import "./Booking.scss";

const Booking = () => {

    return (
        <section className="sectionBooking">
            <Row>
                <div className="book">
                    <div className="bookForm">
                        <div className="uMarginBottomMedium">
                            <HeadingSecondary>
                                Start booking now
                            </HeadingSecondary>
                        </div>
                        <Form>
                            <FormGroup>
                                <Input type="text" placeholder="Full Name" id="name" required />
                                <FormLabel htmlFor="name" className="formLabel">Full name</FormLabel>
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" placeholder="Email Address" id="email" required />
                                <FormLabel htmlFor="email">Email address</FormLabel>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </Row>
        </section>
    )
}

export default Booking;