import React from 'react'
import { Menu, Button } from 'antd';

export default class HeaderSection extends React.Component {

    render() {
        return (
            <Menu mode="horizontal" selectable={false} style={{height: "80px"}}>
                <Menu.Item key="mail" style={{margin: "20px 0"}}>
                    <Button type="primary">Создать карточку</Button>
                </Menu.Item>
            </Menu>
        );
    }
}
