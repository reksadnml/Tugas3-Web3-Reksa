import React from 'react';
import { Layout, Menu } from 'antd';
import { Card, Row } from 'antd';
import '../src/assets/css/App.css';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;
const cardData = [
  {
    nama : "Reksa",
    job : "Eca"
  },
  {
    nama : "Dini",
    job : "Eca Lagi"
  },
  {
    nama : "Milenia",
    job : "Eca Juga"
  },
]

function App() {
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Beranda</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                About Me
              </span>
            }
          >
            <Menu.Item key="1">Nama</Menu.Item>
            <Menu.Item key="2">Masih Kosong</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ margin: 50 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <div className="App">
      {
        cardData.map( data =>
          <Card title={data.nama} bordered={true} style={{ margin:10,display:'inline-block', width: 300 }}>
            <p>{data.job}</p>
          </Card>
      )
    }
    </div>
    </Row>
  </div>,
  
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 Created by Eca</Footer>
      </Layout>
    </Layout>
  </Layout>

  );
}

export default App;
