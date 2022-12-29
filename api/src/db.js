// require('dotenv').config();
// const { Sequelize , Op} = require('sequelize');
// // const ModelCat_Subcat = require("./models/0-Cat_subcat.js");

// const fs = require('fs');
// const path = require('path');
// const { PassThrough } = require('stream');
// const {
//   DB_USER, DB_PASSWORD, DB_HOST
// } = process.env;

// console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/[DB-Name]`);

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dbname`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   dialect: 'sqlite',    
//   storage: 'database.sqlite'
// });

// ModelCat(sequelize); //agregado


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const { } = sequelize.models; 
// Aca vendrian las relaciones



// module.exports = {
//   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//   conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
//   Op
// };
