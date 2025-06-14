const Task = require('../models/Task');
const taskRepository = require('../repositories/TaskRepository');
const projectRepository = require('../repositories/ProjectRepository');

class TaskController {
    getAll(req, res) {
        const tasks = taskRepository.getAll();
        res.json(tasks);
    }

    getById(req, res) {
        const task = taskRepository.getById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    }

    create(req, res) {
        const { title, description, status, projectId, userId } = req.body;

        if (!title || !projectId || !userId) {
            return res.status(400).json({ error: 'Title, projectId, and userId are required' });
        }

        if (!projectRepository.getById(projectId)) {
            return res.status(400).json({ error: 'Project not found' });
        }

        const task = new Task(
            Date.now().toString(),
            title,
            description || '',
            status || 'pending',
            projectId,
            userId
        );

        taskRepository.create(task);
        res.status(201).json(task);
    }

    update(req, res) {
        const task = taskRepository.getById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        const updatedTask = taskRepository.update(req.params.id, req.body);
        res.json(updatedTask);
    }

    delete(req, res) {
        const task = taskRepository.getById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        taskRepository.delete(req.params.id);
        res.status(204).send();
    }

    getByProject(req, res) {
        const tasks = taskRepository.getByProjectId(req.params.projectId);
        res.json(tasks);
    }

    getByStatus(req, res) {
        const tasks = taskRepository.getByStatus(req.params.status);
        res.json(tasks);
    }
}

module.exports = new TaskController(); 