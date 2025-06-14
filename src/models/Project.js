class Project {
    constructor(id, name, description, userId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.userId = userId;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    update(data) {
        Object.assign(this, data);
        this.updatedAt = new Date();
    }
}

module.exports = Project; 