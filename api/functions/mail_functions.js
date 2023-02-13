require("dotenv").config();
const nodemailer = require('nodemailer');
const renderer = require("./renderer_functions")
const smtpTransport = require('nodemailer-smtp-transport');

 const mail_functions = async (to, template, context) => {
     const html = await renderer(template, context)
     const {SERVICE, HOST, PASS, USERNAME} = process.env
    const transporter = nodemailer.createTransport(smtpTransport({
        service: SERVICE,
        host: HOST,
        auth: {
            user: USERNAME,
            pass: PASS
        }
    }));
    const mailOptions = {
        from: USERNAME,
        to: to,
        subject: context.subject,
        html: html
    };


    transporter.sendMail(mailOptions, function(error, info){
        if (error) console.log(error)
        if (info) console.log(info)
    });
}

module.exports = mail_functions
