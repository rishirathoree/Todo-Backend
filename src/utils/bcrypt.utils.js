const salt = process.env.SALT;
console.log(typeof salt,'salt')
const bcrypt = require("bcrypt")

const hashPassword = (password,) => {
    return bcrypt.hash(password, Number(salt));
};

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

module.exports = {
    hashPassword,
    comparePassword
}