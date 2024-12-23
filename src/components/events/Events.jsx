import "./events.css";
import arrowBlack from "../../../img/arrowBlack.svg"
import Step from "../step/Step";
import Form from "../form/Form";
import React from 'react';

function Events () {

    const cardsText = [
        { title: '1. Обсуждаем проект, определяем подходим ли мы друг другу', description: `это кто-то из вашей команды и наш проектный менеджер.`, id: 1},
        { title: '2. Детализируем ваши хотелки в проекте', description: `Составляем Техническое задание проекта (ТЗ) - что должно быть реализовано.`, button: "Разделы. Наполнение. Функции. Дизайн.", id: 2},
        { title: '3. Определяем сроки и бюджет.', id: 3},
        { title: '4. Решаем формальности и приступаем к работе.', id: 4},
        ];

    return (
        <div className="container">
            <div className="events__text">
                <h2 className="events__text-1">Как мы работаем?</h2>
                <h2 className="events__text-2">Несколько шагов до начала проекта</h2>
            </div>
            <div className="events__stepList">
                {cardsText.map((item) => 
                        <React.Fragment key={item.id}>           
                        <Step title={item.title} description={item.description} button={item.button}/>
                        </React.Fragment>
                )}
            </div>
            <div className="events__button">
                <img src={arrowBlack} alt="dots icon"/>
                <button>Наша почта для связи it.perfonace@gmail.com</button>
            </div>
            <Form/>

        </div>)


}

export default Events