import { IUpdateTaskUseCase } from '../../interfaces/use-cases/tasks'; // eslint-disable-line
import ITaskRepository from '../../interfaces/repositories/task.repository'; // eslint-disable-line
import Task from '../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @class
 * @implements {IUpdateTaskUseCase}
 */
class UpdateTaskUseCase {
  /**
   * @param {{
   *   taskRepository: ITaskRepository
   * }} dependencies
   */
  constructor({ taskRepository }) {
    this.taskRepository = taskRepository;
  }

  /**
   * @param {string} taskId
   * @param {{
   *   name: string,
   *   description: string
   * }} data
   * @returns {Promise<Task>}
   */
  async execute(taskId, data) {
    const updatedTask = await this.taskRepository.update(taskId, {
      name: data.name,
      description: data.description
    });

    return updatedTask;
  }
}

export default UpdateTaskUseCase;
