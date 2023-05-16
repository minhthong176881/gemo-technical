import { Button, Modal, Space } from "antd"
import React, { useMemo, useState } from "react"
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next';

const types = [{ name: "Hot", id: "Hot", price: 0 }, { name: "Cold", id: "Cold", price: 0 }, { name: "Blended", id: "Blended", price: 0.5 }]
const sizes = [{ name: "S", id: "S", price: 0 }, { name: "M", id: "M", price: 0.5 }, { name: "L", id: "L", price: 1 }]
const optionsTest = [{ name: "abc", id: "abc", minFree: 0, maxQuantity: 5, quantity: 0, price: 0.25 }, { name: "M", id: "M", minFree: 2, maxQuantity: 5, quantity: 0, price: 0.25 }, { name: "L", id: "L", minFree: 0, maxQuantity: 5, quantity: 0, price: 0.25 }]

export const ModalDetail = ({ isModalOpen, data, handleClose }) => {
    const { t } = useTranslation();
    const [type, setType] = useState("Hot")
    const [size, setSize] = useState("S")
    const [options, setOptions] = useState(optionsTest)
    const handleSubmit = () => {
        const orderItem = {
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
            <div style={{ display: "flex" }}>
                <div>
                    <img className="item-card-img" style={{ objectFit: "cover" }} src={process.env.PUBLIC_URL + '/Bbbtokaba.webp'} alt={data.name} />
                </div>
                <div style={{ width: "100%" }}>
                    <p><b>{t('Available options')}</b></p>
                    <Space>
                        <p><b>{t('Type')}:</b></p>
                        {types.map((item) => {
                            return <Button key={item.id} type="primary" shape="round" className="custom-button" id={item.id} style={{ backgroundColor: item.id === type ? "#603701" : "#c69b7b", fontSize: "15px" }}
                                onClick={() => setType(item.id)}>
                                {item.name}
                            </Button>
                        })}
                    </Space>
                    <div>
                        <Space>
                            <p><b>{t('Size')}:</b></p>
                            {sizes.map((item) => {
                                return <Button key={item.id} type="primary" shape="round" className="custom-button" id={item.id} style={{ backgroundColor: item.id === size ? "#603701" : "#c69b7b", borderRadius: "50%", fontSize: "15px" }}
                                    onClick={() => setSize(item.id)}>
                                    {item.name}
                                </Button>
                            })}
                        </Space>
                    </div>
                    <p><b>Topping:</b></p>
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
                    <b>{t('Total')}: ${total}</b>
                    <div className="modal-footer">
                        <Button type="primary" shape="round" className="custom-button" id="modal-footer-ok" style={{ fontSize: "15px", backgroundColor: "#c69b7b" }} onClick={() => {
                            handleSubmit()
                        }}>{t('Add')}</Button>
                    </div>
                </div>
            </div>
        </Modal>)
}