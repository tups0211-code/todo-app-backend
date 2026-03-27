// const mongoose = require("mongoose");
// require("dotenv").config();

// const dbConnect = () =>{
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology : true,
//     })

//     .then(() => console.log("db connection succesfull "))
//     .catch((error) => {
//         console.log("issue in db connection");
//         console.error(error.message);
//         process.exit(1)
//     });
// }  


// module.exports = dbConnect;

const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("db connection successful"))
    .catch((error) => {
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1);
    });
};

module.exports = dbConnect;