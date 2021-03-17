import bcrypt from 'bcryptjs';

export const hash = (value) => bcrypt.hashSync(value);
export const verifyHash = (currentHash, value) => bcrypt.compareSync(value, currentHash);
