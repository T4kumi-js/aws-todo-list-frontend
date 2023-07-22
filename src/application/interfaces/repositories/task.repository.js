import Task from '../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @interface
 */
class ITaskRepository {
  /**
   * @param {Task} task
   * @returns {Promise<Task>}
   */
  create(task) {}

  /**
   * @param {string} taskId
   * @param {Task} task
   * @returns {Promise<Task>}
   */
  update(taskId, task) {}

  /**
   * @param {string} taskId
   * @returns {Promise<void>}
   */
  remove(taskId) {}

  /**
   * @returns {Promise<Task[]>}
   */
  findAll() {}

  /**
   * @param {string} taskId
   * @returns {Promise<Task?>}
   */
  findOneById(taskId) {}

  /**
   * @param {string} taskId
   * @returns {Promise<Task>}
   */
  markTaskAsCompleted(taskId) {}
}

export default ITaskRepository;
