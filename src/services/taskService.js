import http from './http';

class TaskService {
    create(task) {
        return http.post('/tasks', task);
    }

    update(task) {
        return http.put(`/tasks/${task.id}`, task);
    }

    delete(taskId) {
        return http.delete(`/tasks/${taskId}`);
    }

    get(taskId) {
        return http.get(`/tasks/${taskId}`);
    }

    getAll() {
        return http.get('/tasks');
    }

    markAsCompleted(taskId) {
        return http.put(`/tasks/complete/${taskId}`);
    }
}

export default new TaskService();
