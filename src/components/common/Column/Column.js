import React, {Component} from 'react'
import {Card} from "antd";
import './Column.css'

export default class Column extends Component {
    render() {

        const {name, content} = this.props

        return (
            <div id={name} className="columnContainer">
                <div className="columnTitle">{name}</div>
                <div className="columnContent">
                    {content &&
                        content.map((card, i) => {
                        const { title, description } = card
                        return (
                            <Card title={title}>
                                <p>{description}</p>
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }
}
