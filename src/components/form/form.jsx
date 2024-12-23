import "./form.css";
import arrowBlack from "../../../img/arrowBlack.svg"

function Form () {

    return (
        <div className="formContainer">
        <div className="formContainer__text">
            <h2>Вы дошли сюда?</h2>
            <p>тогда оставьте заявку</p>
            <p className="formContainer__text-down">свяжитесь с нами по почте или оставьте заявку в форме</p>
        </div>
        <form className="formContainer__form">
            <div className="formContainer__inputBox">
                <label htmlFor="email">Ваше имя</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="formContainer__inputBox">
                <label htmlFor="email">Должность</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="formContainer__inputBox">
                <label htmlFor="email">Номер телефона</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="formContainer__inputBox">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="formContainer__button">
                <img src={arrowBlack} alt="dots icon"/>
                <button>Отправить</button>
            </div>
        </form>
        </div>)

}

export default Form