const nodemailer = require('nodemailer');
const fs = require("fs");
const mailer = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: "testeejcm21@gmail.com",
			pass: "rwwrqgjggfcclvdl"
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