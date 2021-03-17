import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const all = async (req, res) => {
    const { user: { id } } = req;
    try {
        const tasks = await prisma.task.findMany({
            where: {
                user: {
                    id,
                },
            },
        });

        res.json({ tasks });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default all;
