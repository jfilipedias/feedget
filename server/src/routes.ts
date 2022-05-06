import express, { Request, Response } from "express";

import { MailAdapter } from "./adapters/nodemailer/MailAdapter";
import { FeedbackRepository } from "./repositories/prisma/FeedbacksRepository";
import { SubmitFeedbackUseCase } from "./useCases/submitFeedback/SubmitFeedbackUseCase";

export const routes = express.Router();

routes.post("/feedbacks", async (request: Request, response: Response) => {
  const { type, comment, screenshot } = request.body;

  const feedbacksRepository = new FeedbackRepository();
  const mailAdapter = new MailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    feedbacksRepository,
    mailAdapter
  );

  await submitFeedbackUseCase.execute({ type, comment, screenshot });

  return response.status(201).send();
});
