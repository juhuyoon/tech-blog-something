const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const models = require('./models');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log('DO I AT LEAST TURN ON?');
	});
});
