import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controllers";

const router = Router();

router.route("/tasks").get(getTasks).post(createTask);
router.route("/tasks/:id").put(updateTask).delete(deleteTask).get(getTask);

export default router;
