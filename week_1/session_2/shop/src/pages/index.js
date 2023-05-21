import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';

const Home = () => {
    const { t } = useTranslation()
    return (
        <>
            <Navbar />
            <div
                style={{
                    textAlign: 'Center',
                    alignItems: 'Center',
                    height: '100vh'
                }}
            >
                <h1>{t('Welcome to Tok Aba Kokotiam')}</h1>
                <img src={process.env.PUBLIC_URL + '/Bbbtokaba.webp'} alt='Logo' />
            </div>
        </>
    )
}

export default Home;