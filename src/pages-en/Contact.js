import React from "react";
import 'antd/dist/antd.css';
import {Menu, Button} from 'antd';
import contact from "../img/contact.jpg";
import DB from "../DB/DB-en";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleClickItemHome = this.handleClickItemHome.bind(this);
        this.handleClickItemStudy = this.handleClickItemStudy.bind(this);
        this.handleClickItemContact = this.handleClickItemContact.bind(this);
    }

    handleClickButton() {
        this.props.history.push("/my-site/cn/Contact");
    }

    handleClickItemHome(e) {
        this.props.history.push("/my-site/");
    }

    handleClickItemStudy(e) {
        this.props.history.push("/my-site/Study");
    }

    // not being used currently, left here for future
    handleClickItemContact(e) {
        // this.props.history.push("/Contact");
    }

    render() {
        return (
            <div>
                <Menu theme={"light"} mode={"horizontal"} defaultSelectedKeys={['3']} style = {{ paddingRight: 50}}>
                    <h1 style={{position: "relative", display: "inline-block", height: 1, width: "8%", paddingLeft: 20}}>
                        Welcome
                    </h1>
                    <Menu.Item key = "1" style={{marginLeft: 1050}} onClick={this.handleClickItemHome}>Home</Menu.Item>
                    <Menu.Item key = "2" onClick={this.handleClickItemStudy}>Study</Menu.Item>
                    <Menu.Item key = "3" onClick={this.handleClickItemContact}>Contact</Menu.Item>
                    <Button style = {{marginLeft: 25}} onClick = {this.handleClickButton}>
                         中文
                    </Button>
                </Menu>

                <img src ={contact} alt = "an contact image" style={{marginTop: 50, marginLeft: 60, width: 750, height: 550}} />

                <div style={{display: "inline-block", float: "right", marginTop: 150, marginRight: 280}}>
                    <h1 style={{textAlign: "center", fontSize: 35}}>Phone</h1>
                    <h2 style={{textAlign: "center"}}>{DB.phone}</h2>
                    <br/>
                    <h1 style={{textAlign: "center", fontSize: 35}}>E-mail</h1>
                    <h2 style={{textAlign: "center"}}>{DB.email}</h2>
                </div>
            </div>
        );
    }
}

export default Contact;