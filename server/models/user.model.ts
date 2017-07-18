import {mongoose} from "../config/database";
import {Schema, Model, Document} from "mongoose";

export interface IUser extends Document{
    name:string;
    uid:string;
}


export interface IUserModel extends Model<IUser>{
    updateUser(user: {}, name: string): Promise<{ nModified: number }>
}

const schema = new Schema({
   name: {
        type: String,
        required: true
    },
   id: {
        type: String,
        required: true
   } 
});
/*
schema.static("updateUser", (author: {}, description: string) => {

    return User
        .update({
            "_id": author
        }, {
            "$set": {
                "description": description
            }
        })
        .exec();
});
*/

export const User = mongoose.model<IUser>("User", schema) as IUserModel;