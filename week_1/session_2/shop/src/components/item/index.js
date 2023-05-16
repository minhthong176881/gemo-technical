import { Button, Card } from "antd";
import React, { useState } from "react";
import { ModalDetail } from "../../pages/detail";
import { useTranslation } from "react-i18next";

const Item = ({ item }) => {
    const { t } = useTranslation();
    const [isModalOpen, setOpenModal] = useState(false)

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
                        <p><b>{t('Type')}:</b> Hot</p>
                        <p><b>{t('Size')}:</b> S</p>
                        <b>{t('Price')}: ${item.price}</b>
                        <div style={{ marginTop: "10px" }}><Button type="primary" shape="round" className="custom-button" id="btn-add-to-card" onClick={() => setOpenModal(true)}>{t('Add to card')}</Button></div>
                    </div>
                </div>
            </Card>
            {isModalOpen && <ModalDetail isModalOpen={isModalOpen} data={item} handleClose={() => setOpenModal(false)} />}
        </>
    )
}

export default Item