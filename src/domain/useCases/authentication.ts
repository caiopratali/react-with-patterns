import { Account } from '../models/Account';

type AuthenticationParams = {
  email: string;
  password: string;
};

interface Authentication {
  auth(params: AuthenticationParams): Promise<Account>;
}

export { Authentication, AuthenticationParams };
