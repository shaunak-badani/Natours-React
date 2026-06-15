import "./Footer.scss";
import logo from "../assets/img/logo-green-2x.png";
import Row from "../components/Row";
import Col from "../components/Col";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footerLogoBox">
                <img src={logo} alt="Full logo" className="footerLogo" />
            </div>
            <Row>
                <Col length={1} total={2}>
                    <div className="footerNavigation">
                        <ul className="footerList">
                            <li className="footerItem"><a href="#" className="footerLink">Company</a></li>
                            <li className="footerItem"><a href="#" className="footerLink">Contact us</a></li>
                            <li className="footerItem"><a href="#" className="footerLink">Careers</a></li>
                            <li className="footerItem"><a href="#" className="footerLink">Privacy policy</a></li>
                            <li className="footerItem"><a href="#" className="footerLink">Terms</a></li>
                        </ul>
                    </div>
                </Col>
                <Col length={1} total={2}>
                    <p className="footerCopyright">
                        Built with <i className="icon-basic-heart" /> by <a href="https://shaunak-badani.github.io" className="footerLink">Shaunak Badani</a>, Copyright &copy;, all rights reserved. 
                        Inspired by designs from <a href="https://jonas.io/" className="footerLink">Jonas Schmedtmann</a>.
                    </p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;