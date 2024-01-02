const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
});

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const BasketDvd = sequelize.define('basket_dvd', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const Dvd = sequelize.define('dvd', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0}
});

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const Developer = sequelize.define('developer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
});

const DvdInfo = sequelize.define('dvd_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.TEXT, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false}
});

const GenreDeveloper = sequelize.define('genre_developer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDvd);
BasketDvd.belongsTo(Basket);

Genre.hasMany(Dvd);
Dvd.belongsTo(Genre);

Developer.hasMany(Dvd);
Dvd.belongsTo(Developer);

Dvd.hasOne(BasketDvd);
BasketDvd.belongsTo(Dvd);

Dvd.hasMany(Rating);
Rating.belongsTo(Dvd);

Dvd.hasMany(DvdInfo, {as: 'info'});
DvdInfo.belongsTo(Dvd);

Genre.belongsToMany(Developer, {through: GenreDeveloper});
Developer.belongsToMany(Genre, {through: GenreDeveloper});

module.exports = {
    User, 
    Basket,
    BasketDvd,
    Dvd,
    Genre,
    Developer,
    Rating,
    DvdInfo,
    GenreDeveloper
}