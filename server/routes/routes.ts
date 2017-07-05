import * as express from "express";
import * as userCtlr from "./user.controller"

let router:express.Router = express.Router();

router.use("/user", userCtlr);

export = router;