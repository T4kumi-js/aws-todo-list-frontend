/**
 * This file is for use cases testing purposes.
 * 
 * To use this, try to copy and paste the following code to the DI:
 * 
 * import InMemTaskRepository from '../repositories/inmem-task.repository';
 * const taskRepository = new InMemTaskRepository();
 */

import ITaskRepository from '../../application/interfaces/repositories/task.repository'; // eslint-disable-line
import Task from '../../domain/entities/task.entity';

/**
 * @class
 * @implements {ITaskRepository}
 */
class TaskRepository {
  constructor() {
    this.taskList = [];
    this.nextTaskId = 1;
  }

  /**
   * @param {Task} task
   * @returns {Promise<Task>}
   */
  async create(task) {
    const now = new Date();

    const createdTask = new Task({
      ...task,
      id: this.nextTaskId++,
      isCompleted: false,
      createdAt: now,
      updatedAt: now
    });

    this.taskList.push(createdTask);

    return createdTask;
  }

  /**
   * @param {string} taskId
   * @param {Task} task
   * @returns {Promise<Task>}
   */
  async update(taskId, task) {
    const taskIndex = this.taskList.findIndex((task) => task.id === taskId);

    const now = new Date();

    const updatedTask = new Task({
      ...this.taskList[taskIndex],
      ...task,
      updatedAt: now
    });

    this.taskList[taskIndex] = updatedTask;

    return updatedTask;
  }

  /**
   * @param {string} taskId
   * @returns {Promise<void>}
   */
  async remove(taskId) {
    const taskIndex = this.taskList.findIndex((task) => task.id === taskId);

    this.taskList.splice(taskIndex, 1);
  }

  /**
   * @returns {Promise<Task[]>}
   */
  async findAll() {
    return [...this.taskList];
  }

  /**
   * @param {string} taskId
   * @returns {Promise<Task?>}
   */
  async findOneById(taskId) {
    const task = this.taskList.find((task) => task.id === taskId);

    return task;
  }
}

export default TaskRepository;
