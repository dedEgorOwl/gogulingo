import nodemailer from "nodemailer";

class mailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }

    async sendActivationMail(email, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Активация аккаунта gogulingo",
            text: "",
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
