export interface IAPIResponse<T> {
  data: T;
  errorMessage?: string;
}
