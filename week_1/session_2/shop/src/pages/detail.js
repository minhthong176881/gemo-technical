import { Button, Modal, Select, Space } from "antd"
import React, { useMemo, useState } from "react"
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const types = [{ name: "Hot", id: "Hot", price: 0 }, { name: "Cold", id: "Cold", price: 0 }, { name: "Blended", id: "Blended", price: 0.5 }]
const sizes = [{ name: "S", id: "S", price: 0 }, { name: "M", id: "M", price: 0.5 }, { name: "L", id: "L", price: 1 }]
const optionsTest = [{ name: "Whipped cream", id: "whipped_cream", minFree: 0, maxQuantity: 1, quantity: 0, price: 0.25 }, { name: "Whole milk", id: "whole_milk", minFree: 0, maxQuantity: 1, quantity: 0, price: 0.25 }, { name: "Almond milk", id: "almond_milk", minFree: 0, maxQuantity: 1, quantity: 0, price: 0.5 }, { name: "Chocolate sauce", id: "chocolate_sauce", minFree: 2, maxQuantity: 6, quantity: 0, price: 0.5 }]

export const ModalDetail = ({ isModalOpen, data, handleClose }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [type, setType] = useState("Hot")
    const [size, setSize] = useState("S")
    const [options, setOptions] = useState(optionsTest)
    const handleSubmit = () => {
        const orderItem = {
            name: data.name,
            type,
            size,
            options,
            total: total
        };

        var orderItems = JSON.parse(localStorage.getItem("orderItems"));
        const newOrderItems = orderItems ? [...orderItems, orderItem] : [orderItem]
        localStorage.setItem("orderItems", JSON.stringify(newOrderItems));

        handleClose()
    }

    const handleCheckout = () => {
        handleSubmit()
        navigate('/checkout')
    }

    const total = useMemo(() => {
        let sum = 0
        const x = types.find((item) => item.id === type)
        const y = sizes.find((item) => item.id === size)
        var z = 0
        if (x) sum += x.price
        if (y) sum += y.price
        options.forEach((option) => {
            if (option.quantity > option.minFree)
                z += option.price * (option.quantity - option.minFree)
        })
        return data.price + sum + z;
    }, [type, size, JSON.stringify(options)])

    return (
        <Modal title={data.name} open={isModalOpen} centered onCancel={handleClose} onOk={() => { }} width={800} footer={null}>
            <div className="item-detail-container">
                <div style={{ textAlign: 'center' }}>
                    <img className="item-detail-img" src={process.env.PUBLIC_URL + '/Bbbtokaba.webp'} alt={data.name} />
                </div>
                <div style={{ width: "100%" }}>
                    <p><b>{t('Available options')}</b></p>
                    <Space>
                        <p><b>{t('Type')}:</b></p>
                        {types.map((item) => {
                            return <Button key={item.id} type="primary" shape="round" className="custom-button not-mobile" id={item.id} style={{ backgroundColor: item.id === type ? "#603701" : "#c69b7b", fontSize: "15px" }}
                                onClick={() => setType(item.id)}>
                                {item.name}
                            </Button>
                        })}
                        <div className="not-desktop">
                            <Select
                                defaultValue="Hot"
                                style={{ width: 120 }}
                                onChange={setType}
                                options={
                                    types.map((item) => {
                                        return { value: item.id, label: item.name }
                                    })
                                }
                            />
                        </div>
                    </Space>
                    <div>
                        <Space>
                            <p><b>{t('Size')}:</b></p>
                            {sizes.map((item) => {
                                return <Button key={item.id} type="primary" shape="round" className="custom-button not-mobile" id={item.id} style={{ backgroundColor: item.id === size ? "#603701" : "#c69b7b", borderRadius: "50%", fontSize: "15px" }}
                                    onClick={() => setSize(item.id)}>
                                    {item.name}
                                </Button>
                            })}
                            <div className="not-desktop" style={{ marginLeft: 0 }}>
                                <Select
                                    defaultValue="S"
                                    style={{ width: 120 }}
                                    onChange={setSize}
                                    options={
                                        sizes.map((item) => {
                                            return { value: item.id, label: item.name }
                                        })
                                    }
                                />
                            </div>
                        </Space>
                    </div>
                    <p><b>Topping:</b></p>
                    <div className="not-mobile">
                        {
                            options.map((item) => {
                                return (
                                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", margin: 5 }}>
                                        <div>
                                            <span><b>{item.name}</b></span>
                                            <div>${item.price}</div>
                                        </div>
                                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", margin: 5 }}>
                                            <Button disabled={item.quantity === 0} onClick={() => {
                                                const newData = options.map((option) => {
                                                    if (option.id === item.id) {
                                                        return {
                                                            ...option,
                                                            quantity: option.quantity - 1
                                                        }
                                                    }
                                                    return option
                                                })
                                                setOptions(newData)
                                            }} shape="circle" icon={<MinusOutlined />}></Button>
                                            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                            <Button disabled={item.quantity === item.maxQuantity} onClick={() => {
                                                const newData = options.map((option) => {
                                                    if (option.id === item.id) {
                                                        return {
                                                            ...option,
                                                            quantity: option.quantity + 1
                                                        }
                                                    }
                                                    return option
                                                })
                                                setOptions(newData)
                                            }} shape="circle" icon={<PlusOutlined />}></Button>
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                    <b>{t('Total')}: ${total}</b>
                    <div className="modal-footer">
                        <Button type="primary" shape="round" className="custom-button" style={{ fontSize: "15px", backgroundColor: "#c69b7b" }} onClick={() => {
                            handleSubmit()
                        }}>{t('Add')}</Button>
                        <Button type="primary" shape="round" className="custom-button" style={{ fontSize: "15px", marginLeft: "10px", backgroundColor: "#c69b7b" }} onClick={() => {
                            handleCheckout()
                        }}>{t('Checkout')}</Button>
                    </div>
                </div>
            </div>
        </Modal>)
}