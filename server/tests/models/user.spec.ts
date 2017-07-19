process.env.NODE_ENV = "testing";

import {User, IUser} from "../../models/user.model";
import * as chai from "chai";
const expect = chai.expect;

describe("Models User", () => {
    let userObject: IUser;
    
    it("should insert a new user", (done: Function) => {
        const user = new User();
        user.name = "Test Name";
        user.id = "TEST_UID_1234";
        /*
        const resp =  User.create(user);
        expect(resp).to.be.an("object");
        expect(resp.name).to.be.equal("Test Name");
        done();
        */
        user.save((err:Error, resp:IUser)=>{
            if (err){
                console.dir(err);    
            }
           userObject = resp;
           expect(resp).to.be.an("object");
           expect(resp.name).to.be.equal("Test Name");
           done();
        });
    
    });
});