import Task from "../model/task";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al buscar las tareas.",
    });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al buscar la tarea.",
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json({
      mensaje: `La tarea '${newTask.taskName}' fue creada exitosamente.`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al crear la tarea.",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La tarea fue eliminada exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al eliminar la tarea.",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La tarea fue actualizada exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al editar la tarea.",
    });
  }
};
