import React, { Component } from "react";
import "./style/home.css";
import { Redirect, withRouter } from "react-router-dom";

class Home extends Component {
    //when user is vendor this function is calls
    handlehange = (e) => {
        e.preventDefault();
        this.props.history.push({ pathname: "/register", state: "vendor" });
    };
    //when user is vendor this function is calls
    handlestudent = (e) => {
        e.preventDefault();
        this.props.history.push({ pathname: "/register", state: "user" });
    };
    render() {
        return (
            <div className="main">
                <div className="child">
                    <h1>Select To Continue As</h1>
                    <div style={{ marginTop: "30px" }}>
                        <button
                            className="but"
                            onClick={this.handlestudent}
                            className="btn btn-primary but1"
                        >
                            <span>User</span>
                        </button>
                        <button
                            className="button"
                            onClick={this.handlehange}
                            className="btn btn-primary but1"
                        >
                            <span>Admin/Vendor</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
