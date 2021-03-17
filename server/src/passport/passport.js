import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JsonWebTokenStrategy, ExtractJwt } from 'passport-jwt';
import { PrismaClient } from '@prisma/client';
import { verifyHash } from '../utils/hash';

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, next) => {
    try {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return next('E-mail not found', null);
        }

        if (!verifyHash(user.encryptedPassword, password)) {
            return next('Incorrect Password', null);
        }

        return next(null, user);
    } catch (err) {
        return next(err.message, null);
    }
}));

passport.use(new JsonWebTokenStrategy({
    secretOrKey: process.env.JWT_ENCRYPTION,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async (jwtPayload, next) => {
    try {
        const { email } = jwtPayload;

        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return next('Token is invalid', null);
        }

        return next(null, user);
    } catch (err) {
        return next(err.message, null);
    }
}));
