//require('dotenv').config({path:'./config/.env'});
express =require ('express');
const cors=require("cors")
const connect=require("./config/connectDB");
//const items= require("./routes/api/items");

//instanciatiation
const app= express();

// middlewware
app.use(express.json())
app.use(cors())

// connect to DB
connect()
// routes
app.use('/api/items',require("./routes/api/items"));

//Port 
const port=7000;
app.listen (port, err=>{
       err? console.log(err): console.log(`🚀server is running on port : ${port}`)
  
})