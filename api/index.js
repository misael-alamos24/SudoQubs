// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');
// // const { PORT } = process.env.PORT || 3001 

// // Syncing all the models at once.
// conn.sync({ force: false }).then(() => { //true olvida, false recuerda
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });
const app = require('./src/app.js');

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const { generate } = require('./utils/generate');

app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});