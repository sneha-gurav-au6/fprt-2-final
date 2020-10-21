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

    typehandle = (type) => {
        if (type === "vendor") {
            return (
                <div className="">
                    <li className="li1">
                        <button className="btn btn-primary ">
                            <a style={{ color: "white" }} href="/addnewproduct">
                                Add New Product
                            </a>
                        </button>
                    </li>
                    <li className="li1">
                        <button className="btn btn-primary ">
                            <a style={{ color: "white" }} href="">
                                Delet Product
                            </a>
                        </button>
                    </li>
                    <li className="li1">
                        <button className="btn btn-primary ">
                            <a style={{ color: "white" }} href="">
                                Edit Product
                            </a>
                        </button>
                    </li>
                    <li className="li1">
                        <button className="btn btn-primary ">
                            <a style={{ color: "white" }} href="">
                                List categories and brands
                            </a>
                        </button>
                    </li>
                </div>
            );
        } else if (type === "admin") {
        }
    };
    render() {
        return (
            <div className="row ">
                <div className="col-md-1"></div>
                <div className=" col-md-3 but">
                    <div className="main">
                        <ul class="list-unstyled">
                            <li className="li1">
                                <button className="btn btn-primary ">
                                    <a style={{ color: "white" }} href="">
                                        Edit Profile
                                    </a>
                                </button>
                            </li>
                            <li className="li1">
                                <button
                                    onClick={this.handleLogout}
                                    className="btn btn-primary  "
                                >
                                    Logout
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
                                                href=""
                                            >
                                                Delet Product
                                            </a>
                                        </button>
                                    </li>
                                    <li className="li1">
                                        <button className="btn btn-primary ">
                                            <a
                                                style={{ color: "white" }}
                                                href=""
                                            >
                                                Edit Product
                                            </a>
                                        </button>
                                    </li>
                                    <li className="li1">
                                        <button className="btn btn-primary ">
                                            <a
                                                style={{ color: "white" }}
                                                href=""
                                            >
                                                List categories and brands
                                            </a>
                                        </button>
                                    </li>
                                </div>
                            ) : (
                                <div>
                                    <li className="li1">
                                        <button
                                            style={{ color: "white" }}
                                            // onClick="handleViewCourse"
                                            className="btn btn-primary "
                                        >
                                            <a
                                                style={{ color: "white" }}
                                                href=""
                                            >
                                                View All Courses
                                            </a>
                                        </button>
                                    </li>

                                    <li className="li1">
                                        <button
                                            style={{ color: "white" }}
                                            // onClick={handleRegisteredCourse}
                                            className="btn btn-primary "
                                        >
                                            My Registered course
                                        </button>
                                    </li>
                                </div>
                            )}
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
                            <h4>
                                Last-login: {this.props.users.user.last_login}
                            </h4>
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
