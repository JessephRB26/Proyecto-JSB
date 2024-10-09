const GetAllProjects = (req , res ) => { 
    res.send ("Hola desde /projects"); 
};

const CreateProjects = (Req, Res)=> { 
    Res.send ("Hola desde POST /projects")};

module.exports = {
    GetAllProjects,
    CreateProjects
}