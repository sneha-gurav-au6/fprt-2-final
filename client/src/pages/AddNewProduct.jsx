import React, { Component } from "react";
import axios from "axios";
import "./style/addcourse.css";
import { connect } from "react-redux";
// import { addPro } from "../Redux/actions/productAction";
import { withRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

// adding new courses for faculty

class AddNewProduct extends Component {


  componentDidMount() {
    if (localStorage) {
      const id = localStorage.getItem("jwtToken");
      this.setState({ token: id });
    }
  }

 //getting input from form
 handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
 
};
  //fetching api and sending data to route


handleFormData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const datas = await axios.post(
      "/addNewProduct",
      formData
    );
    if (datas.status === 200) {
      alert("Uploaded Successfully");
      this.props.history.push("/dashboard");
    }
  };

  render() {
    return (
      <div className="container-fluid w-50">
        <form  onSubmit={this.handleFormData} enctype="multipart/form-data">
          <div className="form-group ">
            {/* add title */}
            <label for="exampleInputEmail1">Add Product Title</label>
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
            <label for="exampleFormControlTextarea1">Product price</label>
            <textarea
              onChange={this.handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="price"
              required
            ></textarea>
          </div>
          {/* 
add dept */}
       <div className="form-group">
            <label for="exampleFormControlTextarea1">Product Quantity</label>
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
add course room */}
       <div className="form-group">
            <label for="exampleFormControlTextarea1">product_category</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="product_category"
              required
            />
          </div>

                {/* 
add waitlist */}
       <div className="form-group">
            <label for="exampleFormControlTextarea1">product_brand</label>
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
add course-team */}
       <div className="form-group">
            <label for="exampleFormControlTextarea1">product_brand_status</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="product_brand_status"
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">product_category_status</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="product_category_status"
              required
            />
          </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">product_image</label>
                <input className="form-control" type="file" name="image" onChange={this.handleChange} />
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

export default connect(mapStateToProps)(withRouter( AddNewProduct ));
