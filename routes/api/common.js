const express = require("express");
const router = express.Router();

// models
const Category = require("../../models/Category");
const Tag = require("../../models/Tag");
const Sorting = require("../../models/SortingFilter");
const PaymentTypes = require("../../models/PaymentTypes");
const About = require("../../models/About");

// @route GET  api/common/getallcategories
// @Desc GET All categories
router.get("/getallcategories", (req, res) => {
  Category.find().then((categories) => res.json(categories));
});

// @route post api/common/postcategory
// @Desc POST category
router.post("/postcategory", (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    value: req.body.value,
  });
  newCategory.save().then((category) => res.json(category));
});

// @route GET  api/common/getalltags
// @Desc GET All tags
router.get("/getalltags", (req, res) => {
  Tag.find().then((tags) => res.json(tags));
});

// @route post api/common/posttag
// @Desc GET All Items
router.post("/posttag", (req, res) => {
  const newTag = new Tag({
    name: req.body.name,
  });
  newTag.save().then((tag) => res.json(tag));
});

// @route GET  api/common/getalltags
// @Desc GET All tags
router.get("/getallsortingfeatures", (req, res) => {
  Sorting.find().then((sorts) => res.json(sorts));
});

// @route post api/common/posttag
// @Desc GET All Items
router.post("/postsortingfeatures", (req, res) => {
  const newSorting = new Sorting({
    name: req.body.name,
  });
  newSorting.save().then((sort) => res.json(sort));
});

// @route GET  api/common/getpaymenttypes
// @Desc GET All tags
router.get("/getpaymenttypes", (req, res) => {
  PaymentTypes.find().then((Types) => res.json(Types));
});

// @route post api/common/postpaymenttypes
// @Desc GET All Items
router.post("/postpaymenttypes", (req, res) => {
  const newType = new PaymentTypes({
    name: req.body.name,
    value: req.body.value,
  });
  newType.save().then((type) => res.json(type));
});

// @route GET  api/common/about
// @Desc GET All tags
router.get("/about", (req, res) => {
  About.find().then((data) => res.json(data));
});

// @route post api/common/postabout
// @Desc GET All Items
router.post("/postabout", (req, res) => {
  const about = new About({
    address: req.body.address,
    number: req.body.number,
    email: req.body.email,
  });
  about.save().then((data) => res.json(data));
});

module.exports = router;
