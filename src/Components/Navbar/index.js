import { Button, Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

function Navbar() {
  return (
    <div className="Navbar">
      <Dropdown trigger={"click"} overlay={menu}>
        <Button type="text" className="hamburger">
          <MenuOutlined style={{ color: "#d9d9d9", fontSize: "2rem" }} />
        </Button>
      </Dropdown>
    </div>
  );
}

export default Navbar;
