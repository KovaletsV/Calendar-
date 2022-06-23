import { Layout, Menu, Row } from "antd";
import  { FC } from "react";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes";

const Navbar: FC = () => {
    const {isAuth}= useTypedSelector(state=> state.auth)
    const router = useHistory();
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ? (
                    <>
                        <div style={{color:'white'}} >Viktor</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => router.push(RouteNames.LOGIN)}
                                key={1}
                            >
                                Logout
                            </Menu.Item>
                        </Menu>
                    </>
                ) : (
                    <>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            onClick={() => router.push(RouteNames.EVENT)}
                            key={1}
                        >
                            Login
                        </Menu.Item>
                    </Menu>
                    </>
                )}
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
