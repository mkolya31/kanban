import React, {Component} from 'react'
import Column from "../../common/Column/Column";
import './Board.css'


export default class Board extends Component {

    render() {

        const { columns } = this.props

        return (
            <div className="boardContainer">
                {
                    columns.map((column, i) => {
                        const {name, content} = column
                        return (
                            <Column id={name} name={name} content={content}/>
                        )
                    })
                }
            </div>
        );
    }
}
