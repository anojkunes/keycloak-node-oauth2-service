const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const keycloak = require('./config/keycloak.js').initKeycloak();
const tests = require("./routes/test");
const app = express();
const session = require('express-session');

dotenv.config();

app.use(session({ secret: 'some secret', resave: false, saveUninitialized: true, store: keycloak.memoryStore }));

app.use(keycloak._keycloak.middleware());
//Body parser
app.use(express.json());
// enable CORS
app.use(cors());


app.use("/api/v1/tests", tests);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({
        welcome: "Hello World"
    });
});

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

