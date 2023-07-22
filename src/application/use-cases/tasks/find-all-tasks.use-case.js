import { IFindAllTasksUseCase } from '../../interfaces/use-cases/tasks'; // eslint-disable-line
import ITaskRepository from '../../interfaces/repositories/task.repository'; // eslint-disable-line
import Task from '../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @class
 * @implements {IFindAllTasksUseCase}
 */
class FindAllTasksUseCase {
  /**
   * @param {{
   *   taskRepository: ITaskRepository
   * }} dependencies
   */
  constructor({ taskRepository }) {
    this.taskRepository = taskRepository;
  }

  /**
   * @returns {Promise<Task[]>}
   */
  async execute() {
    const tasks = await this.taskRepository.findAll();

    return tasks;
  }
}

export default FindAllTasksUseCase;
