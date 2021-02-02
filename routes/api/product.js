const express = require("express");
const router = express.Router();

//models
const product = require("../../models/Product");

// @route GET  api/product/getallproducts
// @Desc GET All products
router.get("/getallproducts", (req, res) => {
  product.find().then((products) => res.json(products));
});

// @route GET  api/product/getallproducts
// @Desc GET All products
router.get("/getproductbyid/:id", (req, res) => {
  let id = req.params.id;
  product.find({ _id: id }).then((products) => res.json(products));
});

// @route post api/product/addproduct
// @Desc POST newproduct
router.post("/addproduct", (req, res) => {
  const newproduct = new product({
    name: req.body.name,
    originalPrice: req.body.originalPrice,
    SalePrice: req.body.SalePrice,
    imageURL: req.body.imageURL,
    description: req.body.description,
    paymentTypes: req.body.paymentTypes,
    category: req.body.category,
    tags: req.body.tags,
  });
  newproduct.save().then((newproduct) => res.json(newproduct));
});

module.exports = router;
