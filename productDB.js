const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB();
    await Product.deleteMany(); // delete.many() avoids multiple data insertion, for eg 7 items and when you update it shows 7 items rather than showing 14 items
    await Product.create(ProductJson);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

start();
