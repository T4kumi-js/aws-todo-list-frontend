import { ICreateTaskUseCase } from '../../interfaces/use-cases/tasks'; // eslint-disable-line
import ITaskRepository from '../../interfaces/repositories/task.repository'; // eslint-disable-line
import Task from '../../../domain/entities/task.entity';

/**
 * @class
 * @implements {ICreateTaskUseCase}
 */
class CreateTaskUseCase {
  /**
   * @param {{
   *   taskRepository: ITaskRepository
   * }} dependencies
   */
  constructor({ taskRepository }) {
    this.taskRepository = taskRepository;
  }

  /**
   * @param {{
   *   name: string,
   *   description: string
   * }} data
   * @returns {Promise<Task>}
   */
  async execute(data) {
    const task = new Task({
      name: data.name,
      description: data.description
    });

    const createdTask = await this.taskRepository.create(task);

    return createdTask;
  }
}

export default CreateTaskUseCase;
