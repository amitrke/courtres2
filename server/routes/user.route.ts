/**
 * Created by amit on 7/2/17.
 */
import {Router, Request, Response} from "express";
import {User} from "../models/user.model";

export class UserRouter{
    
    private router:Router = Router();
    
    getRouter():Router {
        
        this.router.get("/", async(request:Request, response:Response) => {
           const users = await User.find({}).exec();
           response.json(users);
        });
        
        this.router.post("/", async(request: Request, response: Response) => {
            const user = await User.create(request.body);
            response.status(200).json(user);
        });
        
        return this.router;
    }
}