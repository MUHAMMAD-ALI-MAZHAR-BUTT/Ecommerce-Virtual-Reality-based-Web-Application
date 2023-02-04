// DB=mongodb+srv://MuhammadAli:904d13ba@cluster0.k87rjru.mongodb.net/?retryWrites=true&w=majority
require("dotenv").config();
    const express=require("express");
    const app=express();
    const cors=require("cors");
    const connection=require("./db");
    const userRoutes=require("./routes/user");
    const authRoutes=require("./routes/auth");
    const Bespoke=require("./routes/Bespoke");
    //Database connection
    connection();
    //middlewares
    app.use(express.json()); 
    app.use(cors());
    //routes
    app.use("/api/users",userRoutes);
    app.use("/api/auth",authRoutes);
    app.use("/api/Bespoke",Bespoke);
    const port=process.env.PORT || 8080;
    app.listen(port,()=>console.log(`Listening on port ${port}...`))