export interface Error {
  code:           number;
  message:        string;
}

export interface Response<T> {
  data:           T[];
}

export interface WebApiResponse<T> {
  success:        boolean;
  response:       Response<T>;
  errors:         Error[];
}

// 🔹 Versión 2 (con data como objeto único)
export interface ResponseV2<T> {
  data: T;
}

export interface WebApiResponseV2<T> {
  success:        boolean;
  response:       ResponseV2<T>;
  errors:         Error[];
}

export interface Reply {
  nRetorno: number;
  sRetorno: string;
  nRetorno2?: number;
  sRetorno2?: string;
}
