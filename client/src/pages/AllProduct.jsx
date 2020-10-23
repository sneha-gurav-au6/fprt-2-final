import React, { Component } from "react";
import "./style/allproduct.css";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Spinner from "./Spinner";

class AllProduct extends Component {
    //setting all state
    state = {
        image: "",
        name: "",
        price: "",
        brand_name: "",
        category_name: "",
        quantity: "",
        product: null,
    };
    //getting all product by calling route
    async componentDidMount() {
        const data = await axios.get("/getallproduct");
        console.log(data.data);
        this.setState({ product: data.data });
    }
    //delet product by clicking on button
    deletproduct = async (e) => {
        const id = e.target.id;
        console.log(id);
        //calling routes
        axios.post(`/deleteProduct/${id}`);

        //alerts when product delets
        alert("Product Deleted Successfully");

        this.props.history.push("/dashboard");
    };

    render() {
        console.log(this.props.users.user.user_type);
        console.log(this.state.product);
        return (
            <div>
                {this.state.product !== null ? (
                    <div className="row">
                        {this.state.product.map((p) => (
                            <div
                                className="card col-md-3"
                                style={{ width: "18rem",backgroundColor:"gray" }}
                            >
                                <img style={{width="200px",height:"200px"}}
                                    src={p.image[0]}
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        <h3>{p.product_name}</h3>
                                        <h6>Price: {p.price}</h6>
                                        <h6>Quntity:{p.product_quantity}</h6>
                                        <h6>
                                            Status of Category and Brand :
                                            {p.product_brand_status}
                                        </h6>

                                        <h5>Category:{p.product_category}</h5>
                                        <h5>Brand:{p.product_brand}</h5>

                                        {this.props.users.user.user_type ===
                                            "vendor" ||
                                        this.props.users.user.user_type ===
                                            "admin" ? (
                                            <div>
                                                <button
                                                    id={p._id}
                                                    onClick={this.deletproduct}
                                                >
                                                    Delet Product
                                                </button>
                                            </div>
                                        ) : null}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <Spinner />
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user,
    };
};

export default connect(mapStateToProps)(withRouter(AllProduct));
