import React from 'react';
import './Content.css';
import Board from "../Board/Board";


export default class Content extends React.Component {

    state = {
        columns: [
            {
                name: 'To do',
                content: [
                    {
                        title: 'Стили',
                        description: 'Нарисовать основные стили',
                    },
                    {
                        title: 'Оживить',
                        description: 'Написать механизмы перемещения карточек',
                    },
                    {
                        title: 'Добавить меню',
                        description: 'С возможностью редактировать количество и тип колонок',
                    },
                ]
            },
            {
                name: 'In progress',
            },
            {
                name: 'Done',
            }
        ]
    }

    render() {

        console.log(this.state)
        const { columns } = this.state

        return (
            <div className="contentMainContainer">
                <Board columns={ columns } />
            </div>
        );
    }
}
