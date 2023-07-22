import { IMarkTaskAsCompletedUseCase } from '../../interfaces/use-cases/tasks'; // eslint-disable-line
import ITaskRepository from '../../interfaces/repositories/task.repository'; // eslint-disable-line
import Task from '../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @class
 * @implements {IMarkTaskAsCompletedUseCase}
 */
class MarkTaskAsCompletedUseCase {
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
   * @returns {Promise<Task>}
   */
  async execute(taskId) {
    const completedTask = await this.taskRepository.markTaskAsCompleted(taskId);

    return completedTask;
  }
}

export default MarkTaskAsCompletedUseCase;
