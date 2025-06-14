class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    update(data) {
        Object.assign(this, data);
        this.updatedAt = new Date();
    }
}

module.exports = User; 