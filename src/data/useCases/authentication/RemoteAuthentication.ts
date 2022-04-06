import {
  Authentication,
  AuthenticationParams
} from '@/domain/useCases/authentication';
import { HttpPostClient } from '@/data/protocols/http/HttpPostClient';
import { HttpStatusCode } from '@/data/protocols/http/HttpResponse';
import { InvalidCredentialsError } from '@/domain/erros/InvalidCredentialsError';
import { UnexpectedError } from '@/domain/erros/UnexpectedError';
import { Account } from '@/domain/models/Account';

class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      Account
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<Account> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

export { RemoteAuthentication };
