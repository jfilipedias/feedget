import { ICreateFeedbackDTO } from "../../dtos/ICreateFeedbackDTO";
import { prisma } from "../../prisma";
import { IFeedbacksRepository } from "../IFeedbacksRepository";

export class FeedbackRepository implements IFeedbacksRepository {
  async create({
    type,
    comment,
    screenshot,
  }: ICreateFeedbackDTO): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
