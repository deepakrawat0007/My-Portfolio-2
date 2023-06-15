const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ProjectModal = new Schema({
    name:{type:String , required:true},
    stack:{type:String , required:true},
    img:{type:String , required:true},
    github:{type:String , required:true},
    dplink:{type:String , required:true}
},{timestamps:true});

const Project = mongoose.model("Projects" , ProjectModal);

module.exports = Project;