const BaseRepository = require('./BaseRepository');
const Project = require('../models/Project');

class ProjectRepository extends BaseRepository {
    constructor() {
        super();
    }

    getByUserId(userId) {
        return this.getAll().filter(project => project.userId === userId);
    }
}

module.exports = new ProjectRepository(); 