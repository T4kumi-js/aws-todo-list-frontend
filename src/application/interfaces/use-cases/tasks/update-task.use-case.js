import Task from '../../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @interface
 */
class IUpdateTaskUseCase {
  /**
   * @param {string} taskId
   * @param {{
   *   name: string,
   *   description: string
   * }} data
   * @returns {Promise<Task>}
   */
  execute(taskId, data) {}
}

export default IUpdateTaskUseCase;
