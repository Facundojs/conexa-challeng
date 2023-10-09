export interface ISwapiListResponse<T> {
  previous: number | null;
  next: number | null;
  count: number;
  results: T[];
}
