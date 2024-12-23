import "./aboutUs.css";
import promoImg from "./../../../img/Tags.png"

function AboutUs () {

    return (
        <div className="container">
            <div className="aboutUs__container">
                <div className="aboutUs__text">
                    <h2 className="aboutUs__text-h2"><span>О нашей команде</span>и это правда</h2>
                    <p className="aboutUs__text-p">Айти Перфоманс — молодая и амбициозная команда,
                        которая занимается созданием решений в сфере веб-разработки, дизайна и разработки мобильных приложений. 
                        Наша цель — помочь бизнесам и стартапам реализовать их идеи и сделать их онлайн-присутствие более эффективным и привлекательным. 
                        Мы понимаем, что каждый проект уникален, поэтому для каждого клиента мы создаем индивидуальные решения, 
                        которые соответствуют его целям и задачам.
                    </p>
                </div>
                <div className="aboutUs__img">
                    <img src={promoImg} alt="hello" />
                </div>
            </div>
        </div>)
}

export default AboutUs