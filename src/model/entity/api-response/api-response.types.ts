export interface IAPIResponse<T> {
  data?: T;
  statuscode?: number;
  errorMessage?: string;
}
