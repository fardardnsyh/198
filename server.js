// todo - Declare Variables
import express from "express";
const app = express()
// mongoose to build the database blueprint
import mongoose from "mongoose";
// dotenv holds our keys our private data
import dotenv from "dotenv";
// Helps us with login and signup security
import passport from "passport";
// keeps a user logged in
import session from "express-session";
// connection to mongoDB
import MongoStore from "connect-mongo";
// We use this to make edits and delete functionalities
import methodOverride from "method-override";
// helps us show error messages durin login or signup
import flash from "express-flash";
// show the execution of our code in the console
import logger from "morgan";
// Connecting the routes to their appropriate files
import homeRoutes from "./routes/home.js";
import invoiceRoutes from "./routes/invoices.js";


//* Import functions/routes
import { connectDB } from "./config/database.js"

//Use .env file in config folder
dotenv.config()

// Passport config for authentication 
// require("./config/passport")(passport);


// todo - connect to Database

//Connecting to the database
connectDB();



//Using EJS for views
app.set("view engine", "ejs");

//Connecting the static folders to the app
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


// todo - Set up Middleware

//Logging each action in the console
app.use(logger("dev"));

//Use forms for put / delete functionalities 
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());


//Use flash messages for errors, info, ect...
app.use(flash());


// todo - Set Routes
//Setup routes for which the server is listening on
app.use("/", homeRoutes);
app.use("/invoices", invoiceRoutes);




// todo - Start Server
app.listen(process.env.PORT, () => {
// app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}, you better catch it!`);
});