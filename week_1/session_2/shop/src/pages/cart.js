import React, { useState } from "react"
import { Button, Empty, Modal } from "antd"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import CartItem from "../components/item/cartItem"

export const ModalCart = ({ isModalOpen, handleClose }) => {
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

    if (!items.length) {
        return <>
            <Modal title={t('Cart')} centered open={isModalOpen} onOk={handleClose} onCancel={handleClose} footer={null}>
                <Empty
                    imageStyle={{
                        height: 150,
                    }}
                    description={
                        <h4>
                            {t('Your cart is empty!')}
                        </h4>
                    }
                >
                </Empty>
                <div style={{ display: "flex", justifyContent: "center" }}><Button type="primary" shape="round" className="custom-button" style={{ fontSize: "15px" }} onClick={() => { handleClose(); navigate('/menu') }}>{t('Continue shopping!')} </Button></div>
            </Modal>
        </>
    }

    return (
        <Modal title={t('Cart')} centered open={isModalOpen} onOk={handleClose} onCancel={handleClose} footer={null}>
            <div style={{ marginTop: "20px" }}>
                {items.map((item, index) => {
                    return (
                        <CartItem key={index} item={item} handleDelete={() => handleDelete(index)} ></CartItem>
                    )
                })}
            </div>
            <div className="modal-footer">
                <Button type="primary" shape="round"
                    className="custom-button"
                    id="modal-footer-ok"
                    disabled={items.length ? false : true}
                    style={{ fontSize: "15px", backgroundColor: "#c69b7b" }} onClick={() => {
                        handleClose()
                        navigate('/checkout')
                    }}>{t('Checkout')}</Button>
            </div>
        </Modal>
    )
}