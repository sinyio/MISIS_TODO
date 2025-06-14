const express = require('express');
const router = express.Router();
const projectController = require('../controllers/ProjectController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - name
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: ID проекта
 *         name:
 *           type: string
 *           description: Название проекта
 *         description:
 *           type: string
 *           description: Описание проекта
 *         userId:
 *           type: string
 *           description: ID пользователя-владельца
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Получить все проекты
 *     tags: [Проекты]
 *     responses:
 *       200:
 *         description: Список проектов
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */
router.get('/', projectController.getAll);

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Получить проект по ID
 *     tags: [Проекты]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID проекта
 *     responses:
 *       200:
 *         description: Проект найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Проект не найден
 */
router.get('/:id', projectController.getById);

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Создать новый проект
 *     tags: [Проекты]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - userId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Проект создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       400:
 *         description: Неверные данные
 */
router.post('/', projectController.create);

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Обновить проект
 *     tags: [Проекты]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID проекта
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Проект обновлен
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Проект не найден
 */
router.put('/:id', projectController.update);

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Удалить проект
 *     tags: [Проекты]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID проекта
 *     responses:
 *       204:
 *         description: Проект удален
 *       404:
 *         description: Проект не найден
 */
router.delete('/:id', projectController.delete);

/**
 * @swagger
 * /api/projects/user/{userId}:
 *   get:
 *     summary: Получить проекты пользователя
 *     tags: [Проекты]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID пользователя
 *     responses:
 *       200:
 *         description: Список проектов пользователя
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */
router.get('/user/:userId', projectController.getByUser);

module.exports = router; 