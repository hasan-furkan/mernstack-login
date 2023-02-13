const bcrypt = require("bcrypt")
const { genSaltSync } = require("bcrypt");

module.exports = {
     passHash: async function (password, salt) {
     return await bcrypt.hash(password, genSaltSync(salt));
    },

    passValidate: async function (password, hash) {
      return await bcrypt.compare(password, hash);
    }
}
