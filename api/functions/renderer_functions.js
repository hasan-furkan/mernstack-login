const hbs = require("express-handlebars").create()

module.exports = async function(template, context) {
    const path = `mailTemplate/${template}.hbs`
    return await hbs.render(path, context)
}
