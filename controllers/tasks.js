const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: _id } = req.params;
  const task = await Task.findOne({ _id });
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${_id}` });
  }
  return res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: _id } = req.params;
  const task = await Task.findOneAndUpdate({ _id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${_id}` });
  }
  return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: _id } = req.params;
  const task = await Task.findOneAndDelete({ _id });
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${_id}` });
  }
  return res.status(200).send();
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
