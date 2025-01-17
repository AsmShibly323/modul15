import express from "express";
const router = express.Router();
import * as Controller from "../app/controllers/controller.js";




// get request
router.get("/hello",Controller.helloWorld)

// post request 
router.post("/postbody",Controller.postBody)

// jwt token
router.get('/jwt', Controller.generateToken);
export default router;