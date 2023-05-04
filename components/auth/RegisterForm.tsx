import React from 'react';
import styles from "@/components/auth/Auth.module.scss";
import {Button, Form, Input, notification} from "antd";
import {LoginFormDto, RegisterFormDto} from "@/api/dto/auth.dto";
import * as Api from "@/api";
import {setCookie} from "nookies";

const RegisterForm = () => {

    const onSubmit = async (val: RegisterFormDto) => {
        try {
            const { token } = await Api.auth.register(val)

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
            console.warn("RegisterForm", e);
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
                    label="FullName"
                    name="fullName"
                    rules={[{ required: true, message: 'Укажите ФИО' }]}
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
                        Зарегистрироваться
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default RegisterForm;