import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});
