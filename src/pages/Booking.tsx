import CenterText from "../components/CenterText";
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
                        <form action="#" className="form">
                            <div className="formGroup">
                                <input type="text" className="formInput" placeholder="Full Name" id="name" required />
                                <label htmlFor="name" className="formLabel">Full name</label>
                            </div>
                            <div className="formGroup">
                                <input type="email" className="formInput" placeholder="Email address" id="email" required />
                                <label htmlFor="email" className="formLabel">Full name</label>
                            </div>
                        </form>
                    </div>
                </div>
            </Row>
        </section>
    )
}

export default Booking;