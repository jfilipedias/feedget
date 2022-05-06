import { ICreateFeedbackDTO } from "../dtos/ICreateFeedbackDTO";

export interface IFeedbacksRepository {
  create(feedbackCreateDTO: ICreateFeedbackDTO): Promise<void>;
}
