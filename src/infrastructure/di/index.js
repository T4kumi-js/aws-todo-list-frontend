import TaskRepository from '../repositories/task.repository';
import {
  CreateTaskUseCase,
  UpdateTaskUseCase,
  DeleteTaskUseCase,
  MarkTaskAsCompletedUseCase,
  FindAllTasksUseCase,
  FindTaskByIdUseCase
} from '../../application/use-cases/tasks';
import httpClient from '../services/http.service';

const taskRepository = new TaskRepository({ httpClient });

const createTaskUseCase = new CreateTaskUseCase({ taskRepository });
const updateTaskUseCase = new UpdateTaskUseCase({ taskRepository });
const deleteTaskUseCase = new DeleteTaskUseCase({ taskRepository });
const markTaskAsCompletedUseCase = new MarkTaskAsCompletedUseCase({ taskRepository });
const findAllTasksUseCase = new FindAllTasksUseCase({ taskRepository });
const findTaskByIdUseCase = new FindTaskByIdUseCase({ taskRepository });

export {
  createTaskUseCase,
  updateTaskUseCase,
  deleteTaskUseCase,
  markTaskAsCompletedUseCase,
  findAllTasksUseCase,
  findTaskByIdUseCase
};
