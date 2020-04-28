import Task from "../../models/Task";

const Mutation = {
  createTask: async (_, { name, description}) => {
    const newTask = new Task({ name, description });
    return await newTask.save();
  },
};

export default Mutation;
