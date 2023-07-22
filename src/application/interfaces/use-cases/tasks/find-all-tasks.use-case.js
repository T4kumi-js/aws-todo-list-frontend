import Task from '../../../../domain/entities/task.entity'; // eslint-disable-line

/**
 * @interface
 */
class IFindAllTasksUseCase {
  /**
   * @returns {Promise<Task[]>}
   */
  execute() {}
}

export default IFindAllTasksUseCase;
