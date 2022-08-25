import PostModel from "../models/PostModel.js";

export const welcome = (req, res) => {
  res.send("server started");
};

export const savepost = async (req, res) => {
  const datainsrt = req.body;

  console.log("saved");
  const save = await PostModel(datainsrt);
  await save.save();
  res.send("saved");
};

export const getpostpost = async (req, res) => {
  const save = await PostModel.find();

  res.send(save);
};
