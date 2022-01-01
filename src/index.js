import { blue, red, bgRed } from 'chalk';
import express from 'express';
import Routes from './routes';
const server = express();
server.listen(config.port);
server.use('/api', Routes)
server.on('listening', () => {
    console.log(blue(`server running on ${config.port}`))
})
server.on('error', (err) => {
    console.log(red('error starting server'))
    console.log(bgRed(err))
})