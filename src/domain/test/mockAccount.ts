import faker from '@faker-js/faker';
import { AuthenticationParams } from '@/domain/useCases';
import { Account } from '@/domain/models';

const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
});

const mockAccount = (): Account => ({
  accessToken: faker.internet.ipv6()
});

export { mockAuthentication, mockAccount };
