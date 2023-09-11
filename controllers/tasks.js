const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const task = await Task.findOne({ _id });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${_id}` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const task = await Task.findOneAndUpdate({ _id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${_id}` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const task = await Task.findOneAndDelete({ _id });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${_id}` });
    }
    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
