import Task from "../models/Task.js"


const getAllTasks = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  }
  
  const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  }
  
  const getTask = async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
  }
  const deleteTask = async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
  }
  const updateTask = async (req, res, next) => {
    const { id: taskID } = req.params
  
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
  }
  

  export {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }
  
// const getAllTasks  = async(req,res)=>{
//     try {
//         const result = await Task.find();
//         if(result){
//             console.log(result)
//             res.status(200).json({result})
//         }
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
    
// }
// const postTask  = async (req,res)=>{
//     try {
//             const task = await Task.create(req.body);
//             res.status(200).json({ task });
        
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }
// const getSingleTask  = async(req,res)=>{
//     try {
//         const objectId = req.params.id
//         const result  = await Task.findById(objectId)

//         if (result) {
//             res.status(200).json({ result });
//         } else {
//             res.status(404).json({ message: "Task not found" });
//         }
//     } catch (error) {
//         res.status(400).json({ message: "Invalid ID" });
//     }
// };


// const editTask  = async (req,res)=>{
//     try{const objectId = req.params.id;
//         const updateData = req.body
//     const result = await Task.findByIdAndUpdate(
//         objectId,
//         updateData,
//         {new:true, runValidators:true}
//     );
//     if(result){
//         res.status(200).json({message:"updated task!", newTask: result})
//     }}catch(err){
//         res.status(400).json({error:err.message})
//     }
// }
// const deleteTask  = async(req,res)=>{
//     try{
//         const id = req.params.id;
//         const result = await Task.findByIdAndDelete(id);
//         if(result){
//             res.status(200).json({message: `Item deleted with id ${id}`})
//         }
//     }catch(err) {
//         res.status(400).json({error: err.message})
//     }
// }

// export  {getAllTasks,postTask, getSingleTask, editTask,deleteTask}