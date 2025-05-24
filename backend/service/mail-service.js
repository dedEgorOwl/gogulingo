import nodemailer from "nodemailer";

class mailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: "465",
            secure: true,
            auth: {
                user: "gogahahafunny@yandex.ru",
                pass: "fxupnlyvdgoidbyq",
            },
        });
    }

    async sendActivationMail(email, link) {
        await this.transporter.sendMail({
            from: "gogahahafunny@yandex.ru",
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
