import Button, { SecondaryButton } from "../components/Button";
import Form, { FormGroup, FormLabel, Input, RadioInput } from "../components/Form";
import { HeadingSecondary } from "../components/Headings";
import Row from "../components/Row";
import "./Booking.scss";
import btnStyles from "../components/Button.module.scss";
import "../styles/UtilityClasses.css";

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
                            <FormGroup classNames={["uMarginBottomMedium"]}>
                                {/* There is no way of styling the radio buttons, so we will create our own */}
                                <RadioInput name="size" labelFor="small" label="Small tour group" />
                                <RadioInput name="size" labelFor="large" label="Large tour group" />
                            </FormGroup>
                            <FormGroup>
                                <button className={[btnStyles.btn, btnStyles.btnGreen].join(" ")}>Next step &rarr;</button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </Row>
        </section>
    )
}

export default Booking;