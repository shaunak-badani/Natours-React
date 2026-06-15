
import "./Navigation.scss";

const Navigation = () => {

    return (
        <div className="navigation">
            <input type="checkbox" className="navigationCheckbox" id="naviToggle" />

            <label htmlFor="naviToggle" className="navigationButton">MENU</label>

            <div className="navigationBackground">&nbsp;</div>

            <nav className="navigationNav">
                <ul className="navigationList">
                    <li className="navigationItem"><a href="#" className="navigationLink"><span>01</span> About Natours</a></li>
                    <li className="navigationItem"><a href="#" className="navigationLink"><span>02</span> Your benefits</a></li>
                    <li className="navigationItem"><a href="#" className="navigationLink"><span>03</span> Popular tours</a></li>
                    <li className="navigationItem"><a href="#" className="navigationLink"><span>04</span> Stories</a></li>
                    <li className="navigationItem"><a href="#" className="navigationLink"><span>05</span> Book now</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;