import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {  faPhone, faSquare } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return ( <>
    <div id = "footer">

        <div className="footer container">
            <div className="footer_img"></div>
            <div className="footer_content">
                <span className="hotline" > HOTLINE : 0838.300.666 </span> <br/>
                <span>   OR </span> <br/>
                <span> <FontAwesomeIcon icon={faSquare} /> Contact via facebook </span> <br/>
                <span> <FontAwesomeIcon icon={faPhone} /> Contact via Zalo </span> <br/>
            
            </div>
        </div>
    </div>
    
    </> );
}

export default Footer;


