import Task from '../../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @interface
 */
class IFindTaskByIdUseCase {
  /**
   * @param {string} taskId
   * @returns {Promise<Task>}
   */
  execute(taskId) {}
}

export default IFindTaskByIdUseCase;
