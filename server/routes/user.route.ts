/**
 * Created by amit on 7/2/17.
 */
import {Router, Request, Response} from "express";

export class UserRouter{
    
    private router:Router = Router();
    
    getRouter():Router {
        
        this.router.get("/", (request:Request, response:Response) => {
           response.json({"name":"John", "country":"France"}); 
        });
        
        return this.router;
    }
}