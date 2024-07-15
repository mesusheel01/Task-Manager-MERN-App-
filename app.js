import express from 'express';
import router from './routes/task.js'
import connectDB from './db/connection.js'; 
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port =  process.env.PORT || 5000;

app.use(express.static('./public'))
app.use(express.json())


// Use the router middleware for /api/tasks
app.use('/api/tasks', router);


const startServer = async ()=>{
    try{
        await connectDB(process.env.DB_CONNECTION_STRING)
        console.log("connection established")
    }catch(err){
        console.log("Connection to Db failed ", err)
    }
}
startServer()


app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});

