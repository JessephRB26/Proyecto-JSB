const { application } = require("express");
const HttpCodes = require("../../const/HttpCodes");
const axios = require ('axios');
const getApsToken = require("../../lib/aps.libs");



const GetToken = async (req, res) => {

    const access_token =  await getApsToken();
    
    res.status(200).json({
      data: {
        access_token,
      },
      error: false,
      message: "Token successfully generated",
    });
  };
  
  module.exports = {
    GetToken,
  };