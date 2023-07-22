/**
 * @interface
 */
class IDeleteTaskUseCase {
  /**
   * @param {string} taskId
   * @returns {Promise<void>}
   */
  execute(taskId) {}
}

export default IDeleteTaskUseCase;
