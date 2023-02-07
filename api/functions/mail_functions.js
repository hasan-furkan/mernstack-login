const nodemailer = require('nodemailer');
const renderer = require("./renderer_functions")
const smtpTransport = require('nodemailer-smtp-transport');

const config = require("../config")


 const mail_functions = async (to, template, context) => {
     const html = await renderer(template, context)
    const transporter = nodemailer.createTransport(smtpTransport({
        service: config.service,
        host: config.host,
        auth: {
            user: config.user,
            pass: config.pass
        }
    }));
    const mailOptions = {
        from: config.user,
        to: to,
        subject: context.subject,
        html: html
    };


    transporter.sendMail(mailOptions, function(error, info){
        return !error;
    });
}

module.exports = mail_functions
