require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({origin: true, credentials: true}));         // Позволяет браузеру обращаться к серверу
app.use(express.json()); // Чтобы приложение могло парсить json формат
app.use(fileUpload({})); // Для использования файлов (изображений)
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

// Обработка ошибок, последний Middleware
app.use(errorHandler); 

// Все операции с БД являются асинхронными
const start = async () => {
    try {
        await sequelize.authenticate(); // Установление подключения к БД
        await sequelize.sync();         // Сверяет состояние БД со схемой
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();

