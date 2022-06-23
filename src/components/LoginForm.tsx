import { Button, Form, Input } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { rules } from "../utils/rules";
import { AuthActionCreators } from "./store/reducers/auth/action-creators";

const LoginForm: FC = () => {
    const dispatch = useDispatch();
    const { error, isLoading } = useTypedSelector(state => state.auth);
    const submit = () => {
        dispatch(AuthActionCreators.login("ti", "123"));
    };
    return (
        <Form onFinish={submit}>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required("Please enter your username")]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required("Please enter your password")]}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
