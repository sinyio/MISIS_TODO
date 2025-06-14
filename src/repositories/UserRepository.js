const BaseRepository = require('./BaseRepository');
const User = require('../models/User');

class UserRepository extends BaseRepository {
    constructor() {
        super();
    }

    getByEmail(email) {
        return this.getAll().find(user => user.email === email);
    }
}

module.exports = new UserRepository(); 