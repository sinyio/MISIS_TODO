class Task {
    constructor(id, title, description, status, projectId, userId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.projectId = projectId;
        this.userId = userId;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    update(data) {
        Object.assign(this, data);
        this.updatedAt = new Date();
    }
}

module.exports = Task; 