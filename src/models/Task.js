import { Schema, model } from "mongoose";

const task = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default model("Task", task);
