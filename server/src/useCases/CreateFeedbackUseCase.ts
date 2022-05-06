import { IMailAdapter } from "../adapters/IMailAdapter";
import { ICreateFeedbackDTO } from "../dtos/ICreateFeedbackDTO";
import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";

export class CreateFeedbackUseCase {
  private feedbacksRepository: IFeedbacksRepository;
  private mailAdapter: IMailAdapter;

  constructor(
    feedbacksRepository: IFeedbacksRepository,
    mailAdapter: IMailAdapter
  ) {
    this.feedbacksRepository = feedbacksRepository;
    this.mailAdapter = mailAdapter;
  }

  async execute({
    type,
    comment,
    screenshot,
  }: ICreateFeedbackDTO): Promise<void> {
    await this.feedbacksRepository.create({ type, comment, screenshot });
    await this.mailAdapter.sendMail({
      from: "Feedget Team <hi@feedget.com>",
      to: " Filipe Dias <potato@email.com>",
      subject: "New Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16; color: #111;">`,
        `<p>Feedback type: ${type}</p>`,
        `<p>Comment: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
