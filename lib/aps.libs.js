//const HttpCodes = require("../../const/HttpCodes");
const APS_CLIENT_ID = process.env.APS_CLIENT_ID;
const APS_CLIENT_SECRET = process.env.APS_CLIENT_SECRET;
const axios = require ('axios');


const getApsToken = async ( )=> {
    if( !APS_CLIENT_ID| APS_CLIENT_SECRET){
        return res.status(HttpCodes.UNAUTHORIZED).json ({
            data: null,
            error: true,
            message: "no APS CLIENT OR SECRET"
        });
    };
    
    const credentials = `${APS_CLIENT_ID}:${APS_CLIENT_SECRET}`
    // codificar a base 64

    const encondedCredentials = Buffer.from (credentials).toString("base64");
    const headers = {
    'Content-Type': 'aplicacion/x-www-form-urlencoded',
    'Accept'    : 'application/json',
    'Authorization': `Basic ${encondedCredentials}`
    }
    const requestData = {
        'grant_type' : ' client_credentials',
        'scope': ' data:read' // conceder permisos a la app
    }

    const {data} = await axios.post (
        'https://developer.api.autodesk.com/authentication/v2/token', 
        new URLSearchParams(requestData).toString(),
        { headers}
    );

    return data.access_token
};

module.exports= getApsToken;