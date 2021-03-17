// eslint-disable-next-line import/no-unresolved
import passport from 'passport';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err) {
            return res.status(400).json({ error: err });
        }

        const { email } = user;
        const payload = { email };
        const token = jwt.sign(payload, process.env.JWT_ENCRYPTION);

        return res.json({ data: { user, token } });
    })(req, res);
};

export default login;
