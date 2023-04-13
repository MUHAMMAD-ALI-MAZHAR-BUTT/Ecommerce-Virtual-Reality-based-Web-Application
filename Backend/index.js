require("./DB/config");
const express = require("express");
const dotenv = require("dotenv");
const Customer = require("./Models/Customers");
const Product = require("./Models/Product");
const Bespoke = require("./Models/Bespoke");
const JWT = require("jsonwebtoken");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async (request, response) => {
  const check = await Customer.find({ Email: request.body.Email });
  if (check.length === 0) {
    let user = new Customer(request.body);
    let result = await user.save();
    //User account created successfully console.log(`User created successfully ${result}`);
    result = result.toObject();
    delete result.Password; //humny password delete kr dia taky koi kisi trha isko access na kr sky ya api sa wo local storage ma na rakh la
    JWT.sign(
      request.body,
      process.env.JWTPRIVATEKEY,
      { expiresIn: "1h" },
      (error, token) => {
        console.log(`{token} token is generating a JWT`);
        response.send(token);
      }
    );
  } else {
    //User account already exists
    response.sendStatus(401);
  }
});
// function verifyJWTtoken(request,response,next)
// {
//     next();
// }
app.post("/signin", async (request, response) => {
  let user = await Customer.findOne(request.body);
  console.log(user + " user ka data nahi mila");
  if (user != null) {
    console.log(`${user.Username} Signed successfully`);
    JWT.sign(
      request.body,
      process.env.JWTPRIVATEKEY,
      { expiresIn: "1h" },
      (error, token) => {
        console.log(`${token} token is generating a JWT`);
        response.send(token);
      }
    );
  } else {
    console.log(`${request.Username} signed failed`);
    response.sendStatus(401);
  }
});
app.post("/bespoke", async (request, response) => {
  console.log("Bespoke Request body : ", request.body);
  let NewBespoke = new Bespoke(request.body);
  console.log("NewBespoke : ", NewBespoke);
  let result = await NewBespoke.save();
  if (result) {
    response.sendStatus(200);
  } else {
    response.sendStatus(404);
  }
  s;
});
app.get("/api/products", async (req, res) => {
  try {
    console.log('in product route');
    const products = await Product.find({});
    console.log('in products route fetched products are',products);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Server Error:" + error);
  }
});

// get single product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send("Product not found");
  }
});



app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
