const mongoose = require ("mongoose")

const ProjectSchema = new mongoose.Schema (
   {
      tittle: {
         type : String,
         require : true,
      },
         description: {
         type : String,
         require : true,
      },
      Status: {
         type : String,
         require : true,
      },
      user: {
         type : mongoose.Schema.Types.ObjectId,
         ref : 'user',
      }
   },
   {
      timestamps: true,
      versionKey: false,
    }
);

module.exports=mongoose.model("project",ProjectSchema)