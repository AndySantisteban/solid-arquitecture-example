import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const  credentials = {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'e8f9c9c9c9c9c9',
        pass: 'e8f9c9c9c9c9c9'
    }
}

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: credentials.host,
      port: credentials.port,
      auth: {
        user: credentials.auth.user,
        pass: credentials.auth.pass
      }
    })
  }


  async sendMail(message: IMessage): Promise<void> {
      await this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email
        },
        from: {
          name: message.from.name,
          address: message.from.email
        },
        subject: message.subject,
        html: message.body
      })
  }
}