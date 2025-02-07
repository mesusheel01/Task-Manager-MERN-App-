import mongoose, { STATES } from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim:true,
        maxLength: [20, 'Name cannot be more than 20 characters'],
    },
    completed:{
        type: Boolean,
        default: false,
    },
});


export default mongoose.model('Task', taskSchema);