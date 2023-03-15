import { UserDomain } from './user.domain';

describe('UserDomain', () => {
  const dummyUuid = 'dummyUuid';
  const dummyEmail = 'dummyEmail';
  const dummyPhoneNumber = 'dummyPhoneNumber';
  const dummyAccessCode = 'dummyAccessCode';
  const dummyFirstName = 'dummyFirstName';
  const dummyLastName = 'dummyLastName';
  const dummyDateBirth = 'dummyDateBirth';
  const dummyCreatedAt = new Date();
  const dummyUpdatedAt = new Date();

  const userDomain = new UserDomain(
    dummyUuid,
    dummyEmail,
    dummyPhoneNumber,
    dummyAccessCode,
    dummyFirstName,
    dummyLastName,
    dummyDateBirth,
    dummyCreatedAt,
    dummyUpdatedAt
  );

  afterEach(() => jest.clearAllMocks())

  it('should have it`s instance be truthy', () => {
    expect(userDomain).toBeTruthy()
  })
});
