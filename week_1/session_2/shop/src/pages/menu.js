import React from "react";

import { Button, Card, Space } from 'antd';

const Menu = () => {
    var selected = "coffee";

    var changeSelectedBtn = event => {
        let id = event.currentTarget.id
        selected = id
        document.getElementById(id).style.backgroundColor = "black"
        let elements = document.getElementsByClassName("custom-button")
        for (let i = 0; i < elements.length; i++) {
            let elementId = elements[i].getAttribute("id")
            if (elementId !== selected) {
                document.getElementById(elementId).style.backgroundColor = "#603701"
            }
        }
    }

    return (
        <>
            <div className="page-title">
                <h1>Menu</h1>
            </div>

            <div className="menu">
                <div className="menu-btn-tab">
                    <Button type="primary" shape="round" className="custom-button" id="coffee" style={{ backgroundColor: "black" }}
                        onClick={changeSelectedBtn}>
                        Coffee
                    </Button>
                    <Button type="primary" shape="round" className="custom-button" id="milk_tea"
                        onClick={changeSelectedBtn}>
                        Milk tea
                    </Button>
                    <Button type="primary" shape="round" className="custom-button" id="breakfast"
                        onClick={changeSelectedBtn}>
                        Breakfast
                    </Button>
                </div>
                <div className="item-container">
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Card
                            className="item-card"
                            title="Coffee"
                            bordered={false}
                        >  
                            <p>Super good coffee</p>
                        </Card>
                    </Space>
                </div>
            </div>
        </>
    )
}

export default Menu