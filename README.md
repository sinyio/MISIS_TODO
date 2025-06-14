# TODO Приложение API

RESTful API для управления задачами, проектами и пользователями.

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер:
```bash
npm start
```

Для разработки с автоматической перезагрузкой:
```bash
npm run dev
```

Сервер запустится на порту 3000 по умолчанию.

## API Endpoints

### Пользователи
- `GET /api/users` - Получить всех пользователей
- `GET /api/users/:id` - Получить пользователя по ID
- `POST /api/users` - Создать нового пользователя
- `PUT /api/users/:id` - Обновить пользователя
- `DELETE /api/users/:id` - Удалить пользователя

### Проекты
- `GET /api/projects` - Получить все проекты
- `GET /api/projects/:id` - Получить проект по ID
- `POST /api/projects` - Создать новый проект
- `PUT /api/projects/:id` - Обновить проект
- `DELETE /api/projects/:id` - Удалить проект
- `GET /api/projects/user/:userId` - Получить проекты по ID пользователя

### Задачи
- `GET /api/tasks` - Получить все задачи
- `GET /api/tasks/:id` - Получить задачу по ID
- `POST /api/tasks` - Создать новую задачу
- `PUT /api/tasks/:id` - Обновить задачу
- `DELETE /api/tasks/:id` - Удалить задачу
- `GET /api/tasks/project/:projectId` - Получить задачи по ID проекта
- `GET /api/tasks/status/:status` - Получить задачи по статусу

## Хранение данных

Приложение использует хранилище в памяти, все данные будут сброшены при перезапуске сервера.

## Документация и тестирования API

После запуска сервера протестировать API можно в Swagger UI: http://localhost:3000/api-docs