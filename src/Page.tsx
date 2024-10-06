import {
  CaretDownOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Page.css";
import AvatarButton from "./AvatarButton";
import { User } from "./types";
import { useActiveUser } from "./context/ActiveUserContext";

interface PageProps {
  title: string;
  children: JSX.Element;
}

export default function Page(props: PageProps) {
  const { title, children } = props;

  const [users, setUsers] = useState<User[]>([]);
  const { activeUser, setActiveUser } = useActiveUser();

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
    onClick: () => setActiveUser(user.id),
    className: user.id === activeUser ? "active-user" : "",
  }));

  const activeUserDetails = useMemo(
    () => users.find((item) => item.id === activeUser),
    [users, activeUser]
  );

  return (
    <Layout>
      <Header className="page-header">
        <div className="page-header-item left">
          <NavLink
            to="/active-user"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <AvatarButton icon={<UserOutlined />} />
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <AvatarButton icon={<UnorderedListOutlined />} />
          </NavLink>
        </div>
        <h1>{title}</h1>
        <div className="page-header-item right">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <button className="dropdown-button">
              <Space>
                {activeUserDetails && <h3>{activeUserDetails.name}</h3>}
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
