import { PrismaClient } from '@prisma/client';
import startServer from './server';
import './utils/env';

const start = async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    const port = process.env.PORT || 3333;

    startServer(port);
};

start();
