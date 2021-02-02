const Product = require("../../models/Product");

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

async function getProductById(req, res) {
  try {
    const product = await Product.find({ _id: id });
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
}

async function addProduct(req, res, next) {
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
  try {
    const product = await newproduct.save();
    res.send(product);
  } catch (err) {
    res.send(400).send(err);
  }
}

module.exports = { addProduct };
