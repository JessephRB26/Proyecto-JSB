
const HttpCodes =require("../../const/HttpCodes");
const UserModel =require("./users.model");

const GetAllUser = async (req, res) => {

  try {
    const users = await UserModel.find();
    res.status(HttpCodes.OK).json ({
      data: null,
      error: null,
      message : "Get all users"
    });
  } catch (error) {
    res.status (HtppCodes.INTERNAL_SERVER_ERROR).json ({
      data:null,
      Error:error,
      message: " Error getting Users",
    });
  }
};

const login = (req, res) => {
  res.status(HttpCodes.OK).json({
    data: {
      token: " HABIDI",
      userid: " Habidi Hamud"
    },
    error: null,
    message : "User Logged"
});
};


const register = (req, res) => { 
    res.status(HttpCodes.CREATED).json ({
      data: null,
      error: null,
      message: " user registerd"
    });
};


const GetUserById = async (req, res) => {
  const {id} = req.params;
  const user = await UserModel.findById(id).populate("Projects");

  
  try {
    res.status (HttpCodes.OK).json ({
      data: null,
      error: null,
      message: " user registerd"
    });

  }catch  (error) {
    return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: null,
      message: 'error getting user by id: ${error.errorResponse.errmsg}',
    });
  } 
};

const CreateUser = async(req, res) => {
    
  const {name, email}=  req.body;
  
    try {
      const newUser = new UserModel({
        email: email,
        name : name,
      });

      const userCreated= await newUser.save();

         res.status(HttpCodes.CREATED).json({
            data:{
            email:email,
            name:name,
      },
      error : null,
      message: "User created",
    });
    } catch  (error) {
      console.log(error)
    res.status (HttpCodes.INTERNAL_SERVER_ERROR).json ({
      data:null,
      Error:error,
      message: " Error creating Users",
    });
  }
};

module.exports = {
  GetAllUser,
  login,
  register,
  GetUserById,
  CreateUser,
}