import React from "react";
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleClickItemHome = this.handleClickItemHome.bind(this);
        this.handleClickItemStudy = this.handleClickItemStudy.bind(this);
        this.handleClickItemContact = this.handleClickItemContact.bind(this);
    }

    handleClickButton() {
        this.props.history.push("/my-site/");
    }

    // not being used currently, left here for future
    handleClickItemHome(e) {
        // this.props.history.push("/cn/");
    }

    handleClickItemStudy(e) {
        this.props.history.push("/my-site/cn/Study");
    }

    handleClickItemContact(e) {
        this.props.history.push("/my-site/cn/Contact");
    }

    render() {
        return (
            <div>
                <Menu theme={"light"} mode={"horizontal"} defaultSelectedKeys={['1']} style = {{ paddingRight: 50}}>
                    <h1 style={{position: "relative", display: "inline-block", height: 1, width: "8%", paddingLeft: 20}}>
                        欢迎
                    </h1>
                    <Menu.Item key = "1" style={{marginLeft: 1080}} onClick={this.handleClickItemHome}>主页</Menu.Item>
                    <Menu.Item key = "2" onClick={this.handleClickItemStudy}>学习</Menu.Item>
                    <Menu.Item key = "3" onClick={this.handleClickItemContact}>联系</Menu.Item>
                    <Button style = {{marginLeft: 25}} onClick = {this.handleClickButton}>
                        English
                    </Button>
                </Menu>
            </div>
        );
    }
}

export default Home;