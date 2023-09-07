const getAllTasks = async (req, res) => {
  res.send('Get All Tasks');
};

const getTask = async (req, res) => {
  res.send('Get Task');
};

const createTask = async (req, res) => {
  res.send('Create Task');
};

const updateTask = async (req, res) => {
  res.send('Update Task');
};

const deleteTask = async (req, res) => {
  res.send('Delete Task');
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
