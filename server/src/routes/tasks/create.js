import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const create = async (req, res) => {
    const { content } = req.body;

    if (!(content)) {
        return res.status(400).json('Missing values');
    }

    const { user: { id: userId } } = req;
    try {
        const task = await prisma.task.create({
            data: {
                content,
                isComplete: false,
                userId,
            },
        });

        return res.json({ task });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export default create;
