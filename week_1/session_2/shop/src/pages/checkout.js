import React, { useState } from "react";
import CheckoutItem from "../components/item/checkoutItem";
import { useTranslation } from "react-i18next";
import { Button, Empty, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";

const Checkout = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const getItems = () => {
        var orderItems = JSON.parse(localStorage.getItem("orderItems"));
        return orderItems ? orderItems : []
    }

    const [items, setItems] = useState(getItems)
    const handleDelete = (index) => {
        const newItems = items.filter((x, idx) => idx !== index)
        localStorage.setItem("orderItems", JSON.stringify(newItems))
        setItems(getItems)
    }

    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
            message: t('Notification'),
            description:
                t('Your order created successfully!'),
            icon: (
                <SmileOutlined
                    style={{
                        color: 'green',
                    }}
                />
            ),
        });
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const handleOrder = async () => {
        openNotification()
        await delay(3000)
        localStorage.removeItem("orderItems");
        navigate('/menu')
    }

    let total = 0;
    items.forEach(element => {
        total += element.total
    });
    if (!items.length) {
        return <>
            <div className="page-title">
                <h1>{t('Checkout')}</h1>
            </div>
            <div className="" style={{ padding: "2rem 25%" }}>
                <Empty
                    // image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{
                        height: 200,
                    }}
                    description={
                        <h2>
                            {t('Your cart is empty!')}
                        </h2>
                    }
                >
                    <Button type="primary" shape="round" className="custom-button" onClick={() => navigate('/menu')}>{t('Go to menu')} </Button>
                </Empty>
            </div>
        </>
    }


    return (
        <>
            {contextHolder}
            <div className="page-title">
                <h1>{t('Checkout')}</h1>
            </div>
            <div className="" style={{ padding: "2rem 25%" }}>
                {items.map((item, index) => {
                    return (
                        <CheckoutItem key={index} item={item} handleDelete={() => handleDelete(index)} ></CheckoutItem>
                    )
                })}

                <div style={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
                    <div>
                        <div style={{ width: "200px" }}><i><b>{t('Total')}:</b> ${total}</i></div>
                        <Button type="primary" shape="round"
                            className="custom-button"
                            disabled={items.length ? false : true}
                            style={{ fontSize: "15px", marginTop: "20px", backgroundColor: "#c69b7b" }}
                            onClick={handleOrder}
                        >{t('Order')}</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;