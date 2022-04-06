import faker from '@faker-js/faker';
import { AuthenticationParams } from '@/domain/useCases/authentication';
import { Account } from '../models/Account';

const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
});

const mockAccount = (): Account => ({
  accessToken: faker.internet.ipv6()
});

export { mockAuthentication, mockAccount };
