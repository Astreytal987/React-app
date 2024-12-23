import "./promo.css";
import promoImg from "../../../img/Image.jpg"

function Promo () {

    return (
        <div className="container">
            <div className="promo__text">
                <h1 className="promo__text-h1">Ваша команда по эффективной разработке</h1>
                <p className="promo__text-p">Веб-дизайн/ Боты/ Мобильные приложения/ Продуктовый менеджмент и аналитика  </p>
            </div>
            <div className="promo__img">
                <img src={promoImg} alt="hello" />
            </div>
        </div>)
}

export default Promo