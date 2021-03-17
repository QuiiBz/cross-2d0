import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const toggle = async (req, res) => {
    const {
        id,
        isComplete,
    } = req.body;

    if (!(id || isComplete)) {
        return res.status(400).json('Missing values');
    }

    const { user: { id: userId } } = req;
    try {
        const task = await prisma.task.updateMany({
            where: {
                AND: [
                    { id },
                    { userId },
                ],
            },
            data: {
                isComplete,
            },
        });

        return res.json({ task });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export default toggle;
