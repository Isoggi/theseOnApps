export interface HttpRequestOptions<TBody = unknown> extends Omit<
  RequestInit,
  "body" | "method"
> {
  params?: Record<string, string | number | boolean | undefined>;
  body?: TBody;
  timeoutMs?: number;
}
