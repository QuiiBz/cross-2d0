import express from 'express';
import log from '../utils/logger';

const startServer = (port) => {
    const server = express();

    server.listen(port, () => {
        log(`Server started on port ${port}!`, 'green');
    });
};

export default startServer;
