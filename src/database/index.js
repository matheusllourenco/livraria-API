const sequelize = require('./config/sequelize');

const db = {
  livroModel: require('./models/Livro')(sequelize),
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;