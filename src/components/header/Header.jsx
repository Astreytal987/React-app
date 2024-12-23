import "./header.css"

function Header () {

    return <header className="header">
        <div className="container">
            <div className="header__row">
                <div className="header__logo"><h4>Айти Перфоманс</h4></div>
                <nav className="header__nav">
                    <ul>
                        <li><a href="#">О команде <span>кто мы?</span> </a></li>
                        <li><a href="#">Услуги <span>что умеем?</span></a></li>
                        <li><a href="#">Контакты <span>поговорим?</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>;
}

export default Header