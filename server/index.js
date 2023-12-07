require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');

const PORT = process.env.PORT || 5000;

const app = express();

// Все операции с БД являются асинхронными
const start = async () => {
    try {
        await sequelize.authenticate(); // Установление подключения к БД
        await sequelize.sync(); // Сверяет состояние БД со схемой
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();

