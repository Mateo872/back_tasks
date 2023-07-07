import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  taskName: {
    type: String,
    minLength: 1,
    maxLength: 100,
    unique: true,
    required: true,
  },
});

const Task = model("task", taskSchema);

export default Task;
