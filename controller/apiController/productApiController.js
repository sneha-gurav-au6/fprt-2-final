const express = require("express");
const cloudinary = require("cloudinary").v2;
const Product = require("../../model/product");
const User = require("../../model/user");

module.exports = {
    //to add new product
    addProducts: async (req, res) => {
        //new object of product
        const newProduct = {
            user: req.user.id,
            product_name: req.body.product_name,
            product_quantity: req.body.product_quantity,
            product_category: req.body.product_category,
            price: req.body.price,
            product_brand: req.body.product_brand,
            product_brand_status: req.body.product_brand_status,
            product_category_status: req.body.product_category_status,
        };

        //saving new product
        const saveProduct = (product) => {
            let newPro = new Product(product);
            newPro
                .save()
                .then((savedProduct) => {
                    console.log(savedProduct);
                    User.findByIdAndUpdate(
                        { _id: savedProduct.user },
                        { $push: { created_product: savedProduct._id } },
                        { new: true }
                    )
                        .then((user) =>
                            res.json({
                                massage: "Uploaded Succesfully",
                                data: user,
                            })
                        )
                        .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
        };
        if (req.files.length > 0) {
            let images = [];

            //uploading an image to cloudinary
            req.files.map(async (val, ind) => {
                let wait = await cloudinary.uploader.upload(val.path, function (
                    error,
                    response
                ) {
                    if (error) {
                        console.log("err", error);
                    }
                });
                images.push(wait.url);
                if (images.length === req.files.length) {
                    const data = (newProduct.image = images);
                    console.log(data);

                    saveProduct(newProduct);
                }
            });
        } else {
            saveProduct(newProduct);
        }
    },
    //getting all product
    getAllCources: async (req, res) => {
        const course = Product.find()
            .then((data) => {
                console.log(data);
                res.send(data);
            })
            .catch((error) => {
                res.status(400).send("No product Found");
            });
    },

    deleteProduct: async (req, res) => {
        const user = req.user.id;
        const product_id = req.params.id;
        try {
            const product = await Product.findOneAndDelete({
                _id: product_id,
            });
        } catch (err) {
            res.status(500).send("server error");
            console.log(err.massage);
        }
    },
};
