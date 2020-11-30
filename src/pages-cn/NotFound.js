import React from "react";
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

class NotFound extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.history.push("/");
    }

    render() {
        return (
            <Result
                status = "404"
                title = "页面已失联"
                // subTitle = "Sorry, the page you are requesting does not exist."
                subTitle = "抱歉，您访问的页面不存在。"
                style = {{paddingTop: 80}}
                extra = { <Button type = "primary" onClick = {this.handleClick} >
                    返回主页
                </Button> }
            />

        );
    }
}

export default NotFound;