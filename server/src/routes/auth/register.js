import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { hash } from '../../utils/hash';

const prisma = new PrismaClient();

const register = async (req, res) => {
    const {
        firstname,
        lastname,
        birthdate,
        email,
        password,
        passwordConfirmation,
    } = req.body;

    if (!(firstname || lastname || email || birthdate || password || passwordConfirmation)) {
        return res.status(400).json('Missing values');
    }

    if (password !== passwordConfirmation) {
        return res.status(400).json({
            error: "Password and confirmation doesn't match",
        });
    }

    try {
        await prisma.user.create({
            data: {
                firstname,
                lastname,
                birthdate,
                email,
                encryptedPassword: hash(password),
            },
        });

        const payload = { email };
        const token = jwt.sign(payload, process.env.JWT_ENCRYPTION);

        return res.json({ token });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export default register;
