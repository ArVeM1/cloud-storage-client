import React from 'react';
import styles from './Auth.module.scss';
import {Button, Form, Input, notification} from "antd";
import {LoginFormDto} from "@/api/dto/auth.dto";

import * as Api from '@/api';
import {setCookie} from "nookies";
const LoginForm: React.FC = () => {
    const onSubmit = async (val: LoginFormDto) => {
        try {
            const { token } = await Api.auth.login(val)

            notification.success({
                message: 'Успешно!',
                description: 'Переходим в админ-панель... ',
                duration: 2,
            })

            setCookie(null, "_token", token, {
                path: '/'
            })

            location.href = '/dashboard';
        } catch (e) {
            console.warn("LoginForm", e);
        }
    }

    return (
        <div className={styles.formBlock}>
            <Form
                name="basic"
                labelCol={{
                    span: 8
                }}
                onFinish={onSubmit}
            >

                <Form.Item
                    label="E-Mail"
                    name="email"
                    rules={[{ required: true, message: 'Укажите почту' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Укажите пароль' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default LoginForm;