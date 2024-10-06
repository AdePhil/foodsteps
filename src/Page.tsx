import {
  CaretDownOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "./Page.css";
import AvatarButton from "./AvatarButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "./types";

interface PageProps {
  title: string;
  children: JSX.Element;
}

export default function Page(props: PageProps) {
  const { title, children } = props;

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });
  }, []);

  const items = users.map((user) => ({
    key: user.name,
    label: <span>{user.name}</span>,
    icon: <UserOutlined />,
    id: user.id,
    onClick: () => {},
  }));

  return (
    <Layout>
      <Header className="page-header">
        <div className="page-header-item left">
          <Link to="/active-user">
            <AvatarButton icon={<UserOutlined />} />
          </Link>
          <Link to="/posts">
            <AvatarButton icon={<UnorderedListOutlined />} />
          </Link>
        </div>
        <h1>{title}</h1>
        <div className="page-header-item right">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <button className="dropdown-button">
              <Space>
                <CaretDownOutlined />
              </Space>
            </button>
          </Dropdown>
        </div>
      </Header>
      <Content className="page-content">{children}</Content>
    </Layout>
  );
}
