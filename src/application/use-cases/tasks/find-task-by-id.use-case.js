import { IFindTaskByIdUseCase } from '../../interfaces/use-cases/tasks'; // eslint-disable-line
import ITaskRepository from '../../interfaces/repositories/task.repository'; // eslint-disable-line
import Task from '../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @class
 * @implements {IFindTaskByIdUseCase}
 */
class FindTaskByIdUseCase {
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
    const task = await this.taskRepository.findOneById(taskId);

    return task;
  }
}

export default FindTaskByIdUseCase;
