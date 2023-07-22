import { AxiosInstance } from 'axios'; // eslint-disable-line
import ITaskRepository from '../../application/interfaces/repositories/task.repository'; // eslint-disable-line
import Task from '../../domain/entities/task.entity';

/**
 * @class
 * @implements {ITaskRepository}
 */
class TaskRepository {
  /**
   * @param {{
   *   httpClient: AxiosInstance
   * }} dependencies
   */
  constructor({ httpClient }) {
    this.httpClient = httpClient;
  }

  /**
   * @param {Task} task
   * @returns {Promise<Task>}
   */
  async create(task) {
    const response = await this.httpClient.post('/tasks', {
      ...task
    });

    const createdTask = new Task({
      ...response.data
    });

    return createdTask;
  }

  /**
   * @param {string} taskId
   * @param {Task} task
   * @returns {Promise<Task>}
   */
  async update(taskId, task) {
    const response = await this.httpClient.put(`/tasks/${taskId}`, {
      ...task
    });

    const updatedTask = new Task({
      ...response.data
    });

    return updatedTask;
  }

  /**
   * @param {string} taskId
   * @returns {Promise<void>}
   */
  async remove(taskId) {
    await this.httpClient.delete(`/tasks/${taskId}`);
  }

  /**
   * @returns {Promise<Task[]>}
   */
  async findAll() {
    const response = await this.httpClient.get('/tasks');

    const tasks = response.data.map((item) => new Task({ ...item }));

    return tasks;
  }

  /**
   * @param {string} taskId
   * @returns {Promise<Task?>}
   */
  async findOneById(taskId) {
    const response = await this.httpClient.get(`/tasks/${taskId}`);

    const task = new Task({
      ...response.data
    });

    return task;
  }

  async markTaskAsCompleted(taskId) {
    const response = await this.httpClient.put(`/tasks/complete/${taskId}`);

    const completedTask = new Task({
      ...response.data
    });

    return completedTask;
  }
}

export default TaskRepository;
