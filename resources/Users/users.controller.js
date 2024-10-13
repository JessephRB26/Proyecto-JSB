
const HttpCodes =require("../../const/HttpCodes");

const GetAllUser = (req, res) => {
  res.status(HttpCodes.OK).json ({
    data: [],
    error: 'null',
    message : 'Get all users'
});
};

const login = (req, res) => {
  res.status(HttpCodes.OK).json({
    data: {
      token: " HABIDI",
      userid: " Habidi Hamud"
    },
    error: 'null',
    message : 'User Logged '
});
};
  

  const register = (req, res) => { 
    res.status(HttpCodes.CREATED).json ({
      data: null,
      error: null,
      message: " user registerd"
    });
  };

  

const GetUserById =  (req, res) => {
    
  console.log(req.params);
  const {id} = req.params;

  res.status (HttpCodes.OK).json ({
    data: null,
    error: null,
    message: " user registerd"
    
  });
  
};
 
const CreateUser = (req, res) => {
    
  const body =  req.body;
  
  res.status(HttpCodes.CreateUser).json({
    Data:{
      email:body.email,
      name:body.name,
    },
    error : null,
    message: "User created",
  });
}

module.exports = {
  GetAllUser,
  login,
  register,
  GetUserById,
  CreateUser,
}