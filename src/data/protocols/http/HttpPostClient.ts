import { HttpResponse } from './HttpResponse';

type HttpPostParams = {
  url: string;
  body?: object;
};

interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}

export { HttpPostClient, HttpPostParams };
