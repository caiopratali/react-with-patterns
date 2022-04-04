import { HttpPostClient } from '../protocols/http/HttpPostClient';

class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}

export { HttpPostClientSpy };
