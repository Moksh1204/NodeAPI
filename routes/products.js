const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsTesting,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/").post(createProduct)
router.route("/:id").put(updateProduct)
router.route("/:id").delete(deleteProduct);

module.exports = router;
