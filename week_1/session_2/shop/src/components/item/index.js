import { Button, Card } from "antd";
import React from "react";

const Item = ({ item }) => {
    return (
        <>
            <Card
                className="item-card"
                title={item.name}
                bordered={false}
                style={{ width: "auto" }}
            >
                <div className="item-card-content">
                    <img className="item-card-img" src={process.env.PUBLIC_URL + '/Bbbtokaba.webp'} alt={item.name} />
                    <div className="item-card-detail">
                        <p><b>Type:</b> Hot</p>
                        <p><b>Size:</b> S</p>
                        <b>Price: ${item.price}</b>
                        <div style={{ marginTop: "10px" }}><Button type="primary" shape="round" className="custom-button" id="btn-add-to-card">Add to card</Button></div>
                    </div>
                </div>
            </Card></>
    )
}

export default Item