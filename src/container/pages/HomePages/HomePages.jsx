import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Formd from '../Form/Form';
import Cards from '../../../component/Cards/Cards';

const { Header, Content, Footer } = Layout;
const HomePages = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link to="/formd">Input Data </Link></Menu.Item>
            <Menu.Item key="2"><Link to="/cards">Hasil Input</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <p>Form GET</p>
          <Route path="/cards" component={Cards} />
          <Route path="/formd" component={Formd} />
          <div className="site-layout-content"></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  )
};

export default HomePages;

