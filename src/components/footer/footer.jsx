import "./footer.css";

function Footer () {

    return (
        <>
        <div className="container">
            <div className="footer">
            <div className="footer__joinUs">
                <p className="rowItem">Join us:</p>
                <ul>
                    <li><button>Instagram</button></li>
                    <li><button>Facebook</button></li>
                    <li><button>Youtube</button></li>
                </ul>
            </div>
            <div className="footer__contactUs">
                <p className="rowItem">Contact us:</p>
                <ul>
                    <li><button>support@minders.com</button></li>
                    <li><button>+123 4567 89 10</button></li>
                </ul>
            </div>
            <div className="footer__rules">
                <p>The information on this website is provided for general informational purposes only and does not constitute legal or professional advice. The information is accurate to the best of our knowledge for USA law. Use of this website constitutes acceptance of our <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
                <p>All rights reserved. ©2021-2023 Minders.</p>
            </div>
        </div>
    </div>
    <div className="colorDiv"></div>
    </>
    )
}

export default Footer