const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TODO API',
      version: '1.0.0',
      description: 'API для управления задачами, проектами и пользователями',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Локальный сервер разработки',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

module.exports = swaggerJsdoc(options); 