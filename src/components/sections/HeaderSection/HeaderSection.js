import React from 'react'
import {Menu, Button, Modal, Input, Select, Typography, Switch} from 'antd';
import './HeaderSection.css'

const {TextArea} = Input;
const {Option} = Select;
const {Text} = Typography

export default class HeaderSection extends React.Component {

    state = {visible: false};

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <React.Fragment>
                <Menu mode="horizontal" selectable={false} style={{borderBottom: "#3d82e3 4px solid"}}>
                    <Menu.Item key="createButton" style={{margin: "10px 0"}}>
                        <Button type="primary" onClick={this.showModal}>Создать карточку</Button>
                    </Menu.Item>
                    <Menu.Item key="checkbox1" style={{margin: "10px 0"}}>
                        <div className="checkboxDiv">
                            <Switch/>
                            <span className="checkboxSpan">Показать архивированные карточки</span>
                        </div>
                    </Menu.Item>
                </Menu>
                <Modal
                    title="Создать карточку"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Отмена
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            Создать
                        </Button>,
                    ]}
                >
                    <Input placeholder="Заголовок"/>
                    <div style={{margin: '24px 0'}}/>
                    <TextArea placeholder="Описание" rows={4}/>
                    <div style={{margin: '24px 0'}}/>
                    <p>Приоритет</p>
                    <Select defaultValue="low" style={{width: 120}}>
                        <Option value="low">Низкий</Option>
                        <Option value="middle">Средний</Option>
                        <Option value="height">Высокий</Option>
                    </Select>
                </Modal>
            </React.Fragment>
        );
    }
}
