// Vercel Serverless Function for JSON Server
const jsonServer = require('json-server');
const path = require('path');

// Импортируем нашу базу данных
const db = require('./db.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Задержка для имитации реального API
server.use((req, res, next) => {
  setTimeout(next, 800);
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// Middleware для проверки авторизации (опционально)
server.use((req, res, next) => {
  if (req.path === '/login') {
    return next();
  }

  // Для демо-режима пропускаем все запросы
  // В реальном приложении здесь должна быть проверка токена
  next();
});

server.use(router);

// Экспортируем для Vercel
module.exports = server;
