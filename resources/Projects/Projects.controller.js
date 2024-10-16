const HttpCodes = require("../../const/HttpCodes");
const ProjectModel = require("./Projects.model");
const UserModel= require ("../Users/users.model");
const ProjectsModel = require("./Projects.model");

const GetAllProjects = async(req , res ) => { 
    try{
        const projects = await ProjectModel.find().populate("user");

        res.status(HttpCodes.OK).json({
            data: Projects,
            error: null,
            message: " Get all Projects",
        });
    }catch( error){
        return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            error: null,
            message: 'error getting projects',
          });
    }
};

const CreateProjects = async (req, res)=> { 
    const {title,description,status,UserId} = req.body
        
    try {
        const user= await UserModel.findById(userId)

        if (!user){
            return res.status(HttpCodes.NOT_FOUND).json ({
                data:null,
                error: null,
                message: "user with Id ${userId} not found",
            });
        }
        const newProject = new ProjectModel ({
            title,
            description,
            status,
            user: userId,
        });
    
        const createdProject = await newProject.save();

        user.projects.push(createdProject._id);

        await user.save();

        res.status (HttpCodes.CREATED).json ({
            data: newProject,
            error: null,
            message: " Project Created"
        });

    } catch ( error) {
        console.log(error);
        res.status (HttpCodes.INTERNAL_SERVER_ERROR).json ({
            data: null,
            error: null,
            message: " error creating project ",
        });
    };
}


const DeleteProjects = (req,res)  => { 
    Res.send ("Hola desde delete")};



module.exports = {
    GetAllProjects,
    CreateProjects
}