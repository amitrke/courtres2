import {Router} from "express";
import {UserRouter} from "./user.route"

export class Routes {
    
    private router:Router = Router();
    
    getRouter():Router{
        this.router.use("/user", new UserRouter().getRouter());
        
        return this.router;
    }
}