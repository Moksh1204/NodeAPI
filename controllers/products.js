const Product = require('../models/product')

const getAllProducts = async(req,res) => {
    const myData = await Product.find( req.query ).select("name company")
    res.status(200).json({ myData })
};

const getAllProductsTesting = async(req,res) => {
    const {company,name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = name
    }

    if (featured) {
        queryObject.featured = featured;
    }

    let apiData = Product.find(queryObject)
    if (sort) {
        // split from ' , ' and join with ' ' space as we are writing ' , ' for sorting more than 2 field but in coding we have to leave a blank space
        let sortFix = sort.split(",").join(" ")
        apiData = apiData.sort(sortFix)
    }

    if (select) {
        // split from ' , ' and join with ' ' space as we are writing ' , ' for sorting more than 2 field but in coding we have to leave a blank space
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix)
    }
    
    // Pagination API
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page - 1) * limit; // FORMULA OF PAGINATION

    apiData = apiData.skip(skip).limit(limit)

    // Printing Response
    const Products = await apiData
    res.status(200).json({ Products })
};

module.exports = {getAllProducts,getAllProductsTesting} 
 
// find({}) use to get the entire array of the api
// find(req.query) is used to find the data by searching, sorting and pagination with key-value form
// find().sort("price") will sort the price in ascending AND (-price) will sort in decending