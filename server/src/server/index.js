import express from 'express';

export const startServer = (port) => {

    const server = express();

    server.listen(port, () => {

        console.log(`Server started on port ${port}!`);
    });
}

