import React, { Component, useEffect, useState } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style/dashboard.css";
import { logoutUser } from "../redux/actions/userAction";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

class Dashboard extends Component {
    state = {
        user_type: "",
    };

    handleLogout = async (e) => {
        e.preventDefault();
        this.props.logoutUser();
        toast.success("Logout Successfully!", {
            position: toast.POSITION.TOP_CENTER,
        });

        this.props.history.push("/login");
    };

    handleaddbrands = async (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <div className="row ">
                <div className="col-md-1"></div>
                <div className=" col-md-3 but">
                    <div className="main">
                        <ul class="list-unstyled">
                            <li className="li1">
                                <button
                                    onClick={this.handleLogout}
                                    className="btn btn-primary  "
                                >
                                    Logout
                                </button>
                            </li>
                            <li className="li1">
                                <button
                                    style={{ color: "white" }}
                                    className="btn btn-primary "
                                >
                                    <a
                                        style={{
                                            color: "white",
                                        }}
                                        href="/allproduct"
                                    >
                                        Get all Products
                                    </a>
                                </button>
                            </li>

                            {this.props.users.user.user_type === "vendor" ? (
                                <div className="">
                                    <li className="li1">
                                        <button className="btn btn-primary ">
                                            <a
                                                style={{ color: "white" }}
                                                href="/addnewproduct"
                                            >
                                                Add New Product
                                            </a>
                                        </button>
                                    </li>
                                    <li className="li1">
                                        <button className="btn btn-primary ">
                                            <a
                                                style={{ color: "white" }}
                                                href="/allproduct"
                                            >
                                                Delet Product
                                            </a>
                                        </button>
                                    </li>

                                    <li className="li1">
                                        <button className="btn btn-primary ">
                                            <a
                                                style={{ color: "white" }}
                                                href="/allproduct"
                                            >
                                                List categories and brands
                                            </a>
                                        </button>
                                    </li>
                                </div>
                            ) : null}

                            {this.props.users.user.user_type === "admin" ? (
                                <div>
                                    <div>
                                        <li className="li1">
                                            <button
                                                style={{ color: "white" }}
                                                // onClick="handleViewCourse"
                                                className="btn btn-primary "
                                            >
                                                <a
                                                    style={{
                                                        color: "white",
                                                    }}
                                                    href="/register"
                                                >
                                                    add user
                                                </a>
                                            </button>
                                        </li>
                                        <li className="li1">
                                            <button className="btn btn-primary ">
                                                <a
                                                    style={{ color: "white" }}
                                                    href="/allproduct"
                                                >
                                                    List categories and brands
                                                </a>
                                            </button>
                                        </li>
                                        <li className="li1">
                                            <button className="btn btn-primary ">
                                                <a
                                                    style={{ color: "white" }}
                                                    href="/addnewproduct"
                                                >
                                                    Add New Product
                                                </a>
                                            </button>
                                        </li>
                                        <li className="li1">
                                            <button className="btn btn-primary ">
                                                <a
                                                    style={{ color: "white" }}
                                                    href="/allproduct"
                                                >
                                                    Delet Product
                                                </a>
                                            </button>
                                        </li>
                                    </div>
                                </div>
                            ) : null}
                            {this.props.users.user.user_type === "user" ? (
                                <div>
                                    <div></div>
                                </div>
                            ) : null}
                        </ul>
                    </div>
                </div>
                <div className="col-md-1"></div>

                <div className="col-md-6">
                    <div className="img"></div>
                    <div className="text">
                        <img
                            className="image"
                            src={this.props.users.user.image}
                        />
                        <div className="para">
                            <h2>Hello, {this.props.users.user.name}</h2>

                            <h4>Bio: {this.props.users.user.bio}</h4>
                            <h4>status: {this.props.users.user.status}</h4>
                            <h4>Last-login: 1 day ago</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-2"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user,
    };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Dashboard));
