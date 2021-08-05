const User = require("../models/User");
const Auth = require("../config/auth");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { mailer } = require("../config/mail");
const readHtml = require("../config/mail").readHTMLFile;
const hbs = require("handlebars");
const path = require('path');
const jwt = require('jsonwebtoken');


const login = async (req, res) => {
	try {
		const user = await User.findOne({ where: { email: req.body.email } });
		if (!user)
			return res.status(404).json({ message: "Usuario não encontrado." });
		const { password } = req.body;
		if (Auth.checkPassword(password, user.hash, user.salt)) {
			const token = Auth.generateJWT(user);
			return res.status(200).json({ token: token });
		} else {
			return res.status(401).json({ message: "Senha invalida" });
		}
	} catch (e) {
		return res.status(500).json({ err: e })
	}
};

const getDetails = async (req, res) => {
	try {
		const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await User.findByPk(payload.sub);
		if (!user)
			return res.status(404).json({ message: "Usuario não encontrado." });
		return res.status(200).json({ user: user });
	} catch (e) {
		return res.status(500).json({ err: e })
	}
};


const forgot_password = async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user)
			return res.status(400).send({ error: 'User not found' });
		const token = crypto.randomBytes(20).toString('hex');

		//console.log(token);

		const pathTemplate = path.resolve(__dirname, '..', '..', 'templates');
		readHtml(path.join(pathTemplate, "forgotPassword.html"), (err, html) => {
			const template = hbs.compile(html);
			const replacements = {token: token};
			const htmlToSend = template(replacements);
			const message = {
				from: process.env.MAIL_USER,
				to: email,
				subject: "Confirmação de Cadastro - Party's Place",
				context: { token },
				html: htmlToSend
			}
			mailer.sendMail(message, (err) => {
				console.log(err + "!");
			});
		});
		const now = new Date();
		now.setHours(now.getHours() + 1);
		await user.findByPkAndUpdate(user.id,{ passwordResetToken: token, passwordResetExpires: now });  
		

	} catch (err) {
		res.status(400).send({ error: 'Erro on forgot password, try again' });
	}
};


const reset_password = async (req, res) => {
	try {
		const user = await User.findOne({ email })
			.select('+passwordResetToken passwordResetExpires');
		if (!user)
			return res.status(400).send({ error: 'User not found' });

		if (token !== user.passwordResetToken)
			return res.status(400).send({ error: 'Token invalid' });

		const now = new Date();
		if (now > user.passwordResetExpires)
			return res.status(400).send({ error: 'Token expired, generate a new one' });

		user.password = password;

		await user.save();
		res.send();

	} catch (err) {
		res.status(400).send({ error: 'Cannot reset password, try again' });

	}
};



module.exports = {
	login,
	getDetails,
	forgot_password,
	reset_password
}