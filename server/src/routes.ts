import express, { Request, Response } from "express";

import { MailAdapter } from "./adapters/nodemailer/MailAdapter";
import { FeedbackRepository } from "./repositories/prisma/FeedbacksRepository";
import { CreateFeedbackUseCase } from "./useCases/CreateFeedbackUseCase";

export const routes = express.Router();

routes.post("/feedbacks", async (request: Request, response: Response) => {
  const { type, comment, screenshot } = request.body;

  const feedbacksRepository = new FeedbackRepository();
  const mailAdapter = new MailAdapter();
  const createFeedbackUseCase = new CreateFeedbackUseCase(
    feedbacksRepository,
    mailAdapter
  );

  await createFeedbackUseCase.execute({ type, comment, screenshot });

  return response.status(201).send();
});
