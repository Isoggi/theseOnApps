import type { HttpRequestOptions } from "../interfaces";

export class HttpError<TError = unknown> extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly data?: TError;
  constructor(status: number, statusText: string, data?: TError) {
    super(`HTTP Error ${status}: ${statusText}`);
    this.status = status;
    this.statusText = statusText;
    this.data = data;
    this.name = "HttpError";
  }
}

export class HttpClient {
  private readonly baseUrl: string;
  private readonly defaultHeaders: HeadersInit;
  constructor(baseUrl: string, defaultHeaders: HeadersInit = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
  }

  private buildUrl(
    endpoint: string,
    params?: HttpRequestOptions["params"],
  ): string {
    const url = new URL(endpoint, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    return url.toString();
  }

  private async request<TResponse, TBody = unknown>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    endpoint: string,
    options: HttpRequestOptions<TBody> = {},
  ): Promise<TResponse> {
    const {
      params,
      body,
      timeoutMs = 8000,
      headers,
      ...customConfig
    } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const isFormData = body instanceof FormData;
    const mergedHeaders: HeadersInit = {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      Accept: "application/json",
      ...this.defaultHeaders,
      ...headers,
    };

    try {
      const response = await fetch(this.buildUrl(endpoint, params), {
        method,
        headers: mergedHeaders,
        body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
        signal: options.signal ?? controller.signal,
        ...customConfig,
      });

      // Handle non-2xx HTTP responses
      if (!response.ok) {
        const errorData = await response.json().catch(() => undefined);
        throw new HttpError(response.status, response.statusText, errorData);
      }

      // Safely handle 204 No Content or empty bodies
      if (
        response.status === 204 ||
        response.headers.get("content-length") === "0"
      ) {
        return undefined as TResponse;
      }

      return (await response.json()) as TResponse;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new Error(
          `Request to ${endpoint} timed out after ${timeoutMs}ms`,
        );
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  public get<TResponse>(
    endpoint: string,
    options?: Omit<HttpRequestOptions, "body">,
  ) {
    return this.request<TResponse>("GET", endpoint, options);
  }

  public post<TResponse, TBody = unknown>(
    endpoint: string,
    body: TBody,
    options?: Omit<HttpRequestOptions<TBody>, "body">,
  ) {
    return this.request<TResponse, TBody>("POST", endpoint, {
      ...options,
      body,
    });
  }

  public put<TResponse, TBody = unknown>(
    endpoint: string,
    body: TBody,
    options?: Omit<HttpRequestOptions<TBody>, "body">,
  ) {
    return this.request<TResponse, TBody>("PUT", endpoint, {
      ...options,
      body,
    });
  }

  public patch<TResponse, TBody = unknown>(
    endpoint: string,
    body: TBody,
    options?: Omit<HttpRequestOptions<TBody>, "body">,
  ) {
    return this.request<TResponse, TBody>("PATCH", endpoint, {
      ...options,
      body,
    });
  }

  public delete<TResponse = void>(
    endpoint: string,
    options?: Omit<HttpRequestOptions, "body">,
  ) {
    return this.request<TResponse>("DELETE", endpoint, options);
  }
}
