import express from 'express';
import log from '../utils/logger';
import router from '../routes/router';

const startServer = (port) => {
    const server = express();

    server.use(express.json());
    server.use('/', router);

    server.listen(port, () => {
        log(`Server started on port ${port}!`, 'green');
    });
};

export default startServer;
