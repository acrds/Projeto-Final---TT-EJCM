const express = require('express');
require('./config/dotenv')();
require('./config/sequelize');
const path = require('path');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const routes = require('./routes/routes');

const passport = require("passport");
require("./middlewares/jwtPassport")(passport);
app.use(passport.initialize());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);


app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));


app.listen(port, () => {
  console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    