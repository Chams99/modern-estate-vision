import type { ContactFormInput } from "../domain/contact-form";
import type { HttpClient } from "../../../shared/api/http-client";

export interface ContactRepository {
  submitContact(input: ContactFormInput): Promise<void>;
}

export class HttpContactRepository implements ContactRepository {
  constructor(private readonly client: HttpClient) {}

  async submitContact(input: ContactFormInput): Promise<void> {
    await this.client.request<void>({
      path: "/contact",
      method: "POST",
      body: input,
    });
  }
}

export const buildSubmitContactUseCase =
  (repository: ContactRepository) =>
  async (input: ContactFormInput): Promise<void> => {
    await repository.submitContact(input);
  };
