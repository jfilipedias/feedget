import nodemailer, { Transporter } from "nodemailer";

import { ISendMailDTO } from "../../dtos/ISendMailDTO";
import { IMailAdapter } from "../IMailAdapter";

export class MailAdapter implements IMailAdapter {
  private transport: Transporter;

  constructor() {
    this.transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
  }

  async sendMail({ from, to, subject, body }: ISendMailDTO): Promise<void> {
    await this.transport.sendMail({
      from,
      to,
      subject,
      html: body,
    });
  }
}
