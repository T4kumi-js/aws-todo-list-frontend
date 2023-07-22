import { IDeleteTaskUseCase } from '../../interfaces/use-cases/tasks'; // eslint-disable-line
import ITaskRepository from '../../interfaces/repositories/task.repository'; // eslint-disable-line

/**
 * @class
 * @implements {IDeleteTaskUseCase}
 */
class DeleteTaskUseCase {
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
   * @returns {Promise<void>}
   */
  async execute(taskId) {
    await this.taskRepository.remove(taskId);
  }
}

export default DeleteTaskUseCase;
