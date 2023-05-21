import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from 'react-router-dom';

const accounts = [{ username: "admin", password: "admin" }, { username: "guest", password: "guest" }]

const Login = () => {
    const navigate = useNavigate();
    const checkAccount = (form) => {
        let isLoggedIn = false
        accounts.forEach(acc => {
            if (form.username === acc.username && form.password === acc.password) {
                isLoggedIn = true
            }
        })

        return { isLoggedIn, username: form.username }
    }

    const onFinish = (values) => {
        let ret = checkAccount(values)
        if (!ret.isLoggedIn) message.error('Invalid credential!')
        else {
            message.success('Login successful!');
            if (ret.username === 'guest')
                navigate('/')
            else navigate('/admin')
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Invalid credential!')
    };

    return (
        <>
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