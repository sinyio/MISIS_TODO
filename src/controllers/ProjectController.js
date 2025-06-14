const Project = require('../models/Project');
const projectRepository = require('../repositories/ProjectRepository');

class ProjectController {
    getAll(req, res) {
        const projects = projectRepository.getAll();
        res.json(projects);
    }

    getById(req, res) {
        const project = projectRepository.getById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    }

    create(req, res) {
        const { name, description, userId } = req.body;

        if (!name || !userId) {
            return res.status(400).json({ error: 'Name and userId are required' });
        }

        const project = new Project(
            Date.now().toString(),
            name,
            description || '',
            userId
        );

        projectRepository.create(project);
        res.status(201).json(project);
    }

    update(req, res) {
        const project = projectRepository.getById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        const updatedProject = projectRepository.update(req.params.id, req.body);
        res.json(updatedProject);
    }

    delete(req, res) {
        const project = projectRepository.getById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        projectRepository.delete(req.params.id);
        res.status(204).send();
    }

    getByUser(req, res) {
        const projects = projectRepository.getByUserId(req.params.userId);
        res.json(projects);
    }
}

module.exports = new ProjectController(); 