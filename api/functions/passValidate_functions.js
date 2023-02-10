const bcrypt = require("bcrypt")
const config = require("../config");

module.exports = {
     passHash: async function (password) {
     return await bcrypt.hash(password, config.salt);
    },

    passValidate: async function (password, hash) {
      return await bcrypt.compare(password, hash);
    }
}
