const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1]; 
        // Отделяем тип токена (Bearer) от самого токена
        if (!token) {
            // alert('Пользователь не авторизован');
            return res.status(401).json({message: 'Не авторизован'});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch(e) {
        // alert('Пользователь не авторизован');
        res.status(401).json({message: 'Не авторизован 1'});
    }
}