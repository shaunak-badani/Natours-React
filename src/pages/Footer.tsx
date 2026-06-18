import "./Footer.scss";
import logo2x from "../assets/img/logo-green-2x.png";
import logo1x from "../assets/img/logo-green-1x.png";
import logoGreenSmall1x from "../assets/img/logo-green-small-1x.png";
import logoGreenSmall2x from "../assets/img/logo-green-small-2x.png";
import Row from "../components/Row";
import Col from "../components/Col";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footerLogoBox">
                <picture className="footerLogo">
                    <source srcSet={logoGreenSmall1x + " 1x, " + logoGreenSmall2x + " 2x"} media="(max-width: 37.5em)" />
                    <img srcSet={logo1x + " 1x, " + logo2x + " 2x"} alt="Full logo" src={logo2x} />
                </picture>
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