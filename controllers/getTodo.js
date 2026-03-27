const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try {
        //fetch all todo item from db
        const todos = await Todo.find({});

        //res update
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire data is fetched"
        });
    }
    catch(error){
      console.error(error);
      res.status(500)
      .json({
        success:false,
        error:error.message,
        message:'server error',
      });
    }
}

exports.getTodoById = async(req,res) =>{
    try{
        //base on id extract item
        const id = req.params.id;
        const todo =  await Todo.findById(id);
     
         if(!todo){
            return res.status(404)({
                success:false,
                message:"no data found by given id "
            });
         }

             res.status(200).json({
                success:true,
                data:todo,
                message :`todo ${id} data fetched succesfylly`,
           });
         }
    
    catch(error){
      console.error(error);
      res.status(500)
      .json({
        success:false,
        error:error.message,
         message:"server error"
   
      });
    }
};



