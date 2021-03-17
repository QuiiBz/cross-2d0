import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteTask = async (req, res) => {
    const { id } = req.body;

    if (!(id)) {
        return res.status(400).json('Missing values');
    }

    const { user: { id: userId } } = req;
    try {
        await prisma.task.deleteMany({
            where: {
                AND: [
                    { id },
                    { userId },
                ],
            },
        });

        return res.json({ deleted: true });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export default deleteTask;
