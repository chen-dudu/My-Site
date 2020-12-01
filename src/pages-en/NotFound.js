import React from "react";
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

class NotFound extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.history.push("/my-site/");
    }

    render() {
        return (
            <Result
            status = "404"
            title = "Page Not Found"
            subTitle = "Sorry, the page you are requesting does not exist."
            style = {{paddingTop: 80}}
            extra = { <Button type = "primary" onClick = {this.handleClick} >
                        Back to Homepage
                      </Button> }
            />

        );
    }
}

export default NotFound;