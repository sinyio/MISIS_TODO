const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - projectId
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: ID задачи
 *         title:
 *           type: string
 *           description: Название задачи
 *         description:
 *           type: string
 *           description: Описание задачи
 *         status:
 *           type: string
 *           enum: [pending, in_progress, completed]
 *           description: Статус задачи
 *         projectId:
 *           type: string
 *           description: ID проекта
 *         userId:
 *           type: string
 *           description: ID пользователя
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Получить все задачи
 *     tags: [Задачи]
 *     responses:
 *       200:
 *         description: Список задач
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/', taskController.getAll);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Получить задачу по ID
 *     tags: [Задачи]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID задачи
 *     responses:
 *       200:
 *         description: Задача найдена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Задача не найдена
 */
router.get('/:id', taskController.getById);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Создать новую задачу
 *     tags: [Задачи]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - projectId
 *               - userId
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *               projectId:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Задача создана
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Неверные данные
 */
router.post('/', taskController.create);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Обновить задачу
 *     tags: [Задачи]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID задачи
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *     responses:
 *       200:
 *         description: Задача обновлена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Задача не найдена
 */
router.put('/:id', taskController.update);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Удалить задачу
 *     tags: [Задачи]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID задачи
 *     responses:
 *       204:
 *         description: Задача удалена
 *       404:
 *         description: Задача не найдена
 */
router.delete('/:id', taskController.delete);

/**
 * @swagger
 * /api/tasks/project/{projectId}:
 *   get:
 *     summary: Получить задачи проекта
 *     tags: [Задачи]
 *     parameters:
 *       - in: path
 *         name: projectId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID проекта
 *     responses:
 *       200:
 *         description: Список задач проекта
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/project/:projectId', taskController.getByProject);

/**
 * @swagger
 * /api/tasks/status/{status}:
 *   get:
 *     summary: Получить задачи по статусу
 *     tags: [Задачи]
 *     parameters:
 *       - in: path
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, in_progress, completed]
 *         required: true
 *         description: Статус задачи
 *     responses:
 *       200:
 *         description: Список задач по статусу
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/status/:status', taskController.getByStatus);

module.exports = router; 