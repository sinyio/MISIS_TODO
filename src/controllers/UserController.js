const User = require('../models/User');
const userRepository = require('../repositories/UserRepository');

class UserController {
    getAll(req, res) {
        const users = userRepository.getAll();
        res.json(users);
    }

    getById(req, res) {
        const user = userRepository.getById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    }

    create(req, res) {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        if (userRepository.getByEmail(email)) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const user = new User(
            Date.now().toString(),
            name,
            email
        );

        userRepository.create(user);
        res.status(201).json(user);
    }

    update(req, res) {
        const user = userRepository.getById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const updatedUser = userRepository.update(req.params.id, req.body);
        res.json(updatedUser);
    }

    delete(req, res) {
        const user = userRepository.getById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        userRepository.delete(req.params.id);
        res.status(204).send();
    }
}

module.exports = new UserController(); 