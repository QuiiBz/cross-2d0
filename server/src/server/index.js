import express from 'express';

const startServer = (port) => {
    const server = express();

    server.listen(port, () => {
        console.log(`Server started on port ${port}!`);
    });
};

export default startServer;
