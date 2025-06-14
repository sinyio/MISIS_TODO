const BaseRepository = require('./BaseRepository');
const Task = require('../models/Task');

class TaskRepository extends BaseRepository {
    constructor() {
        super();
    }

    getByProjectId(projectId) {
        return this.getAll().filter(task => task.projectId === projectId);
    }

    getByUserId(userId) {
        return this.getAll().filter(task => task.userId === userId);
    }

    getByStatus(status) {
        return this.getAll().filter(task => task.status === status);
    }
}

module.exports = new TaskRepository(); 