import nodemailer from 'nodemailer';
import { dotenvInit } from '../dotenvInit.js';

class mailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: dotenvInit.parsed.SMTP_HOST,
			port: dotenvInit.parsed.SMTP_PORT,
			secure: true,
			auth: {
				user: dotenvInit.parsed.SMTP_USER,
				pass: dotenvInit.parsed.SMTP_PASSWORD,
			},
		});
	}

	async sendActivationMail(email, link) {
		await this.transporter.sendMail({
			from: dotenvInit.parsed.SMTP_USER,
			to: email,
			subject: 'Активация аккаунта gogulingo',
			text: '',
			html: `
            <div>
                <h1>Для активации перейдите по ссылке</h1>
                <a href="${link}">${link}</a>
            </div>
            `,
		});
	}
}

export default new mailService();
