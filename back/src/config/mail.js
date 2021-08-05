const nodemailer = require('nodemailer');
require('dotenv').config;

const fs = require("fs");
const mailer = nodemailer.createTransport({
		service: process.env.MAIL_HOST,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD
		}
});

const readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};

module.exports = {
	mailer,
	readHTMLFile
};