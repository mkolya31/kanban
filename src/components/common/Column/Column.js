import React, {Component} from 'react'
import {Icon, Modal, Switch, Button, message, Input, Select } from "antd";
import './Column.css'

const { TextArea } = Input
const { Option } = Select

export default class Column extends Component {

    renderPriority = (priority) => {
        switch (priority) {
            case 0:
                return <Icon type="minus" />
            case 1:
                return <Icon type="up" />
            case 2:
                return <Icon type="fire" />
        }
    }

    renderPriorityTitle = (priority) => {
        switch (priority) {
            case 0:
                return 'Приоритет низкий'
            case 1:
                return 'Приоритет средний'
            case 2:
                return 'Приоритет высокий'
        }
    }

    state = {
        deleteVisible: false,
        editVisible: false,
        addVisible: false,
        delete: false
    };

    showAddVisible = () => {
        this.setState({
            addVisible: true,
        });
    }

    handleAddCancel = e => {
        this.setState({
            addVisible: false,
        });
    };

    handleAddOk = e => {
        this.setState({
            addVisible: false,
        });
        message.success('Карточка была успешно восстановлена')
    };

    showDeleteModal = () => {
        this.setState({
            deleteVisible: true,
        });
    };

    handleDeleteCancel = e => {
        this.setState({
            deleteVisible: false,
        });
    };

    showEditModal = () => {
        this.setState({
            editVisible: true,
        });
    };

    handleEditOk = e => {
        this.setState({
            editVisible: false,
        });
        message.success('Карточка была успешно изменена')
    };

    handleEditCancel = e => {
        this.setState({
            editVisible: false,
        });
    };

    handleDeleteOk = e => {
        this.setState({
            ...this.state,
            deleteVisible: false,
            delete: false,
        });
        message.info(`Карточка была успешно ${ !this.state.delete ? 'отправлена в архив' : 'удалена' }`)
    }

    handleDeleteOptionOnChange = () => {
        this.setState({
            ...this.state,
            delete: !this.state.delete,
        })
    }

    render() {

        const {name, content} = this.props

        return (
            <div id={name} className="columnContainer">
                <div className="columnTitle">{name}</div>
                <div className="columnContent">
                    {content &&
                        content.map((card, i) => {
                        const { title, description, priority, archived } = card
                        return (
                            <div className={`kanbanCard${archived ? ' archivedCard' : ''}`}>
                                <span className="cardTitle">{title}</span>
                                <div className="cardDesc">
                                    <span>{description}</span>
                                </div>
                                <span
                                    className="cardIcon deleteIcon"
                                    onClick={this.showDeleteModal}
                                >
                                    <Icon type="delete" />
                                </span>
                                {archived &&
                                <span
                                    className="cardIcon addIcon"
                                    onClick={this.showAddVisible}
                                >
                                    <Icon type="plus-square" />
                                </span>
                                }
                                {
                                    !archived &&
                                    <span
                                        className="cardIcon editIcon"
                                        onClick={this.showEditModal}
                                    >
                                    <Icon type="edit" />
                                </span>
                                }
                                <span className={`cardIcon priorityIcon${archived ? ' archived' : ''}`} title={this.renderPriorityTitle(priority)}>{this.renderPriority(priority)}</span>
                            </div>
                        )
                    })}
                </div>
                <Modal
                    title="Редактировать карточку"
                    visible={this.state.editVisible}
                    footer={[
                        <Button key="back" onClick={this.handleEditCancel}>
                            Отмена
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleEditOk}>
                            Сохранить
                        </Button>,
                    ]}
                >
                    <Input placeholder="Заголовок" />
                    <div style={{ margin: '24px 0' }} />
                    <TextArea placeholder="Описание" rows={4} />
                    <div style={{ margin: '24px 0' }} />
                    <p>Приоритет</p>
                    <Select defaultValue="low" style={{ width: 120 }}>
                        <Option value="low">Низкий</Option>
                        <Option value="middle">Средний</Option>
                        <Option value="height">Высокий</Option>
                    </Select>
                </Modal>
                <Modal
                    title="Удалить карточку"
                    visible={this.state.deleteVisible}
                    footer={[
                        <Button key="back" onClick={this.handleDeleteCancel}>
                            Отмена
                        </Button>,
                        <Button
                            key="submit"
                            type="danger"
                            onClick={this.handleDeleteOk}
                        >
                            {!this.state.delete ? 'Отправить в архив' : 'Удалить'}
                        </Button>,
                    ]}
                >
                    <p>Вы действительно хотите убрать карточку с доски?</p>
                    <div style={{ margin: '24px 0' }} />
                    <Switch
                        defaultChecked
                        onChange={this.handleDeleteOptionOnChange}
                    />
                    <span className="deleteOption">Отправить карточку в архив</span>
                </Modal>
                <Modal
                    title="Восстановить карточку"
                    visible={this.state.addVisible}
                    footer={[
                        <Button key="back" onClick={this.handleAddCancel}>
                            Отмена
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            onClick={this.handleAddOk}
                        >
                            Восстановить
                        </Button>,
                    ]}
                >
                    <p>Вы действительно хотите восстановить карточку?</p>
                    <div style={{ margin: '24px 0' }} />
                </Modal>
            </div>
        );
    }
}
