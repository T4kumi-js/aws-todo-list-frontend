import Task from '../../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @interface
 */
class ICreateTaskUseCase {
  /**
   * @param {{
   *   name: string,
   *   description: string
   * }} data
   * @returns {Promise<Task>}
   */
  execute(data) {}
}

export default ICreateTaskUseCase;
