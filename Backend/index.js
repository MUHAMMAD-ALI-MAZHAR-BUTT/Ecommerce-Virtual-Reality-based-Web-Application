// DB=mongodb+srv://MuhammadAli:904d13ba@cluster0.k87rjru.mongodb.net/?retryWrites=true&w=majority
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const Bespoke = require("./routes/Bespoke");
const productRoute=require("./routes/product");
//Database connection
connection();
//middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('Public'))
//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/Bespoke", Bespoke);
app.use("/api/products", productRoute);
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`))