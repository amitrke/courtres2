import mongoose = require("mongoose");

mongoose.Promise = global.Promise as any;

mongoose.connect("mongodb://127.0.0.1/typescript_mongoose");

export { mongoose };