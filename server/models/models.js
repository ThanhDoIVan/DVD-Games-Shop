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

const BasketDVD = sequelize.define('basket_dvd', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const DVD = sequelize.define('dvd', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    release_date: {type: DataTypes.DATE, allowNull: false},
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
    name: {type: DataTypes.STRING, allowNull: false}
});

const DVDInfo = sequelize.define('dvd_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const GenreDeveloper = sequelize.define('genre_developer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDVD);
BasketDVD.belongsTo(Basket);

Genre.hasMany(DVD);
DVD.belongsTo(Genre);

Developer.hasMany(DVD);
DVD.belongsTo(Developer);

DVD.hasOne(BasketDVD);
BasketDVD.belongsTo(DVD);

DVD.hasMany(Rating);
Rating.belongsTo(DVD);

DVD.hasMany(DVDInfo);
DVDInfo.belongsTo(DVD);

Genre.belongsToMany(Developer, {through: GenreDeveloper});
Developer.belongsToMany(Genre, {through: GenreDeveloper});

module.exports = {
    User, 
    Basket,
    BasketDVD,
    DVD,
    Genre,
    Developer,
    Rating,
    DVDInfo,
    GenreDeveloper
}