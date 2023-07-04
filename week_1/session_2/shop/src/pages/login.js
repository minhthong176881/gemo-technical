import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithProvider } from "../Firebase";
import axios from 'axios';

const backendUrl =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:8000/api/v1";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [providerUser, setProviderUser] = useState(null);

    const login = async (provider) => {
        const res = await signInWithProvider(provider);
        if (res.success) {
            if (res.user) {
                if (!res.user.username)
                    res.user.username = res.user.email;
                setProviderUser(res.user);
            }
        } else {
            if (res.code === 'auth/account-exists-with-different-credential') {
                message.error("Email has already existed! Please try to login with another provider!");
            } else message.error(res.code);
        }
    }

    useEffect(() => {
        if (providerUser) {
            axios
                .post(`${backendUrl}/register`, providerUser)
                .then((response) => {
                    const user = {
                        ...providerUser,
                        _id: response.data.userId, // Store _id in the user object
                    };
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [providerUser]);

    useEffect(() => {
        // Update user state when localStorage changes
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    const onFinish = (values) => {
        const username = values.username;
        const password = values.password;
        axios
            .post(`${backendUrl}/login`, { username, password })
            .then((response) => {
                const data = response.data;
                if (data.user) {
                    const user = {
                        ...data.user,
                    };
                    message.success('Login successfully!')
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                    navigate("/")
                } else {
                    message.error("Wrong username or password. Please try again.");
                }
            })
            .catch((error) => {
                message.error(error.response.data.message)
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Invalid credential!')
    };

    return (
        <>
            {user ? <Navigate to="/" /> : null}
            <div className="page-title">
                <h1>Login</h1>
            </div>
            <div className="form-container">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <div className="not-desktop">
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 0,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </div>
                    <div className="not-mobile">
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </div>

                    <Form.Item
                        wrapperCol={{
                            offset: 3,
                            span: 16,
                        }}
                    >
                        <Button type="primary" className="social-login-btn" onClick={() => login('Facebook')}>Login with Facebook <FacebookOutlined /></Button>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 3,
                            span: 16,
                        }}
                    >
                        <Button type="primary" className="social-login-btn" onClick={() => login('Google')}>Login with Google <GoogleOutlined /></Button>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" className="custom-button" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Login;