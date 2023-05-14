import React from 'react';

const Home = () => {
    return (
        <div
            style={{
                textAlign: 'Center',
                alignItems: 'Center',
                height: '100vh'
            }}
        >
            <h1>Welcome to Tok Aba Kokotiam</h1>
            <img src={process.env.PUBLIC_URL + '/Bbbtokaba.webp'} alt='Logo' />
        </div>
    )
}

export default Home;