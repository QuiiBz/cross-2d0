import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const login = async (req, res) => {
    const {
        firstname, lastname, email, birthdate, password, passwordConfirmation,
    } = req.body;

    if (!(firstname || lastname || email || birthdate || password || passwordConfirmation)) {
        return res.status(400).json('Missing values');
    }

    try {
        await prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                birthdate: new Date(birthdate),
                encryptedPassword: password,
            },
        });
    } catch (err) {
        return res.status(400).json('User already exist');
    }

    return res.json('Login');
};

export default login;
