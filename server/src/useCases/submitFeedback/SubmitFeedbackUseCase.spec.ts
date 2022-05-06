import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "bug",
        comment: "This is a bug",
        screenshot: "data:image/png;base64sdfsdgasgasdgasdhgiasudghasdg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        comment: "This is a bug",
        screenshot: "data:image/png;base64sdfsdgasgasdgasdhgiasudghasdg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without a comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "bug",
        screenshot: "data:image/png;base64sdfsdgasgasdgasdhgiasudghasdg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "bug",
        comment: "This is a bug",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
