const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema (
    {
     name: {
        type : String,
        require : true,
     },
        email: {
        type : String,
        require : true,
     },
    },
    {
    timestamps: true,
    versionKey: false,
    }
);

module.exports=mongoose.model("User",UserSchema)