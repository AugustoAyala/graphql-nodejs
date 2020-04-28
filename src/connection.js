import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/graphql-tasks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Connected database"))
  .catch((err) => console.log(err));
