require("dotenv").config();
const { connect } = require("mongoose");
const connectDB=require("../config/db");
const Blog=require("../models/blog");

const seedData=[
    {
        title:"First Blog",
        description:"First description",
        content:"Sample content",
        author:"Pooja",
        type:"Tech"
    }       
];

const seedDB =async()=>{
    await connectDB();
    await Blog.insertMany(seedData);
    console.log("Database Seeded");
    process.exit();

};

seedDB();

