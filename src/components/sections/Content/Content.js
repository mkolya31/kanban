import React from 'react';
import {Icon} from 'antd';
import Board from "../Board/Board";
import './Content.css';


export default class Content extends React.Component {

    state = {
        columns: [
            {
                name: 'To do',
                content: [
                    {
                        title: 'Отправить отчёт',
                        description: 'Прикрепить отчёт в ЭОС',
                        priority: 2
                    },
                    {
                        title: 'Получить оценку за модуль',
                        description: 'Сдать другие лабораторные работы',
                        priority: 2
                    },
                    {
                        title: 'Подготовиться к экзамену',
                        description: 'Выучить экзаменационные билеты',
                        priority: 1
                    },
                ]
            },
            {
                name: 'In progress',
                content: [
                    {
                        title: 'Сделать отчёт',
                        description: 'Сделать отчёт о проделанной работе',
                        priority: 2
                    },
                    {
                        title: 'Сделать скриншоты',
                        description: 'Сделать скриншоты приложения',
                        priority: 1
                    },
                    // {
                    //     title: 'Лечь спать',
                    //     description: 'Закончить отчёт и лечь спать',
                    //     priority: 1,
                    //     archived: true,
                    // },
                ]
            },
            {
                name: 'Done',
                content: [
                    {
                        title: 'Оживить',
                        description: 'Написать механизмы перемещения карточек',
                        priority: 1
                    },
                    {
                        title: 'Стили',
                        description: 'Нарисовать основные стили',
                        priority: 0
                    },
                    {
                        title: 'Добавить меню',
                        description: 'С возможностью редактировать количество и тип колонок',
                        priority: 0
                    },
                ]
            }
        ],
        visible: false
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
