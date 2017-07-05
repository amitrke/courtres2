/**
 * Created by amit on 7/2/17.
 */
import * as express from "express";

let router:express.Router = express.Router();

router.get('/', function (req, resp) {
    resp.send('User get');
})

export = router;