import { ISendMailDTO } from "../dtos/ISendMailDTO";

export interface IMailAdapter {
  sendMail({ from, to, subject, body }: ISendMailDTO): Promise<void>;
}
