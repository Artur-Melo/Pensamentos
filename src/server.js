/* eslint-disable no-console */
const express = require('express');
const router = require('./routes');
const handlebars = require('express-handlebars');
require('./database/index');

const app = express();

app.engine('handlebars', handlebars.engine({dafaultLayout: "main"}));
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.static('public'));
app.use(router);

app.listen(3030, () => console.log(`Server running on port  ✅`));
