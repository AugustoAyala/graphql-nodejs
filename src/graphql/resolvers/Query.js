import Task from "../../models/Task";

const Query = {
  ping() {
    return "pong";
  },
  tasks: async () => {
    return await Task.find();
  },
};

export default Query;
