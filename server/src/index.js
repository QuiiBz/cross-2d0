import { startServer } from './server';
import './utils/env';

const start = async() => {

    const port = process.env.PORT || 3333;

    startServer(port);
}

start();