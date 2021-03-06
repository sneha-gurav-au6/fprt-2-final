import React, { Component } from "react";
import axios from "axios";
import "./style/addcourse.css";
import { connect } from "react-redux";
// import { addPro } from "../Redux/actions/productAction";
import { withRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

// adding new product

class AddNewProduct extends Component {
    state = {
        image: [],
        token: "",
    };
    //to set userid
    componentDidMount() {
        if (localStorage) {
            const id = localStorage.getItem("jwtToken");
            this.setState({ token: id });
        }
    }

    //getting input from form

    //fetching api and sending data to route

    handleFormData = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        const datas = await axios.post("/addproduct", formData);
        if (datas.status === 200) {
            alert("Uploaded Successfully");
            this.props.history.push("/dashboard");
        }
    };
    //seving changing data to state
    handleChange = (event) => {
        const { value } = event.target;
        let newState = this.state;
        newState.image.push(value);
        this.setState(newState);
    };

    render() {
        return (
            <div className="container-fluid w-50">
                <form
                    onSubmit={this.handleFormData}
                    enctype="multipart/form-data"
                >
                    <div className="form-group ">
                        {/* add title */}
                        <label for="exampleInputEmail1">
                            Add Product Title
                        </label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="product_name"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            Product price
                        </label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="price"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
                    {/* 
add quantity */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            Product Quantity
                        </label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="product_quantity"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder=""
                            required
                        />
                    </div>

                    {/* 
add categoery */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            product_category
                        </label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="product_category"
                            type="text"
                            required
                        />
                    </div>

                    {/* 
add brand */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            product_brand
                        </label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="product_brand"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder=""
                            required
                        />
                    </div>
                    {/* 
add brand status */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            product_brand_status
                        </label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="product_brand_status"
                            type="text"
                            required
                        />
                    </div>
                    {/* 
add categoery status */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            product_category_status
                        </label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            type="text"
                            name="product_category_status"
                            required
                        />
                    </div>
                    {/* 
add images */}
                    <h5>Select Product Image</h5>

                    <div>
                        <div className="form-group">
                            <br />
                            <div className="input-group">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                        name="image"
                                        onChange={this.handleChange}
                                    />
                                    <label
                                        class="custom-file-label"
                                        for="inputGroupFile01"
                                    >
                                        choose product
                                        {/* {!this.state.image[0]
                                            ? " image"
                                            : this.state.image[0]} */}
                                    </label>
                                </div>
                            </div>
                            <p>
                                You will not see selected image name.Just click
                                on submit button to upload image
                            </p>
                        </div>

                        {/*  */}

                        {/*  */}
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state,
    };
};

export default connect(mapStateToProps)(withRouter(AddNewProduct));
