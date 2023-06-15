const router = require("express").Router()
const cloudinary = require("../Cloudinary/cloundinary")
const Project = require("../Modal/modal");

router.post("/AddProject" ,async (req, res) =>{
try{
    const {name , stack , github , dplink} = req.body
    const file = req.files.file.tempFilePath
    const img = await cloudinary.uploader.upload(file,{
        folder : "Project_Image"
    })

    const project = new Project({
        name:name,
        stack:stack,
        github:github,
        dplink:dplink,
        img:img.secure_url
    })

    const response = await project.save()

    return res.status(200).json({
        message:"Project Added SuccessFully"
    })

}catch(e){
    return res.status(400).json({
        message:e.message
    })
}
})

router.get("/AllProjects" , async(req , res)=>{
    try
{
    const projects = await Project.find().sort({_id:-1})

    return res.status(200).json(projects)

}
catch(e){
    return res.status(400).json({
        message:e.message
    })
}
})

router.delete("/deleteProject/:id" , async(req, res)=>{
    try{
        const _id = req.params.id
        await Project.findByIdAndDelete(_id)

        const projects = await Project.find().sort({_id:-1})

        return res.status(200).json({
            message:"Project Deleted SuccessFully",
            projects:projects
        })

    }
    
    catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
})

module.exports = router;
