import faker from '@faker-js/faker';
import { HttpPostParams } from '../protocols/http';

const mockPostRequest = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: faker.random.objectElement
  };
};

export { mockPostRequest };
