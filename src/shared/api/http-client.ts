import { env } from "../config/env";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface HttpClientRequestOptions {
  path: string;
  method?: HttpMethod;
  body?: unknown;
  signal?: AbortSignal;
  /**
   * Optional per-request timeout in milliseconds.
   * Defaults to 15 seconds.
   */
  timeoutMs?: number;
}

export interface HttpClient {
  request<TResponse>(options: HttpClientRequestOptions): Promise<TResponse>;
}

const DEFAULT_TIMEOUT_MS = 15_000;

const buildRequestUrl = (path: string): string => {
  // Allow absolute URLs to be passed through (useful for mocks or 3rd parties)
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  // Otherwise, resolve relative paths against the configured API base URL.
  return new URL(path, env.VITE_API_BASE_URL).toString();
};

class FetchHttpClient implements HttpClient {
  async request<TResponse>({
    path,
    method = "GET",
    body,
    signal,
    timeoutMs = DEFAULT_TIMEOUT_MS,
  }: HttpClientRequestOptions): Promise<TResponse> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(buildRequestUrl(path), {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        signal: signal ?? controller.signal,
      });

      if (!response.ok) {
        const message = `Request failed with status ${response.status}`;
        throw new Error(message);
      }

      // We assume JSON responses for this application.
      // If a route intentionally returns no content, callers can
      // parameterize TResponse as `void` and ignore the value.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return (await response.json()) as TResponse;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new Error("Request timed out");
      }

      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}

export const httpClient: HttpClient = new FetchHttpClient();
