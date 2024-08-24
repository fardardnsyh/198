import express from "express";
const router = express.Router();
import { getIndex } from "../controllers/home.js"
import { getLogin, getSignup } from "../controllers/auth.js"

// const { ensureAuth } = require("../middleware/auth");

//Main Routes 
router.get("/", getIndex);


//* GET routes for user login/signup
router.get("/login", getLogin);
router.get("/signup", getSignup);

//* POST routes for user login/signup
// router.post("/login", postLogin);
// router.get("/logout", logout);
// router.post("/signup", postSignup);

export default router
