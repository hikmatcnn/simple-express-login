const http = require('http');
const cluster = require('cluster');
const cpu = require('os').cpus().length;

const app = require('./app');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.info(`App Simple Login compile on PORT ${PORT}`);
});