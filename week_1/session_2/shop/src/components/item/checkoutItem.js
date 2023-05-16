import React from "react";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";

const CheckoutItem = ({ item, handleDelete }) => {
    console.log('item', item)
    const { t } = useTranslation()
    const topping = item.options.map((item) => item.name).join(", ")
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "20px", borderBottom: "0.5px solid black" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img style={{ objectFit: "cover", width: "150px" }} src={process.env.PUBLIC_URL + '/Bbbtokaba.webp'} alt="" />
                    <div style={{marginLeft: "10px"}}>
                        <div style={{ fontSize: "18px", marginBottom: "10px" }}><b>{item.name}</b></div>
                        <div><b>{t('Type')}:</b> {item.type}</div>
                        <div><b>{t('Size')}:</b> {item.size}</div>
                        <div><b>{t('Topping')}:</b> {topping}</div>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "200px"}}>
                    <div><i><b>{t('Price')}:</b> ${item.total}</i></div>
                    <div className="trash-icon" onClick={handleDelete}><FaTrash /></div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem;