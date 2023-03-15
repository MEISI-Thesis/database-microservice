import { ConnectionDomain } from './connection.domain';

describe('ConnectionDomain', () => {
  const dummyUuid = 'dummyUuid';
  const dummyUserUuid = 'dummyUserUuid';
  const dummySystemUuid = 'dummySystemUuid';
  const dummyPlatformUuid = 'dummyPlatformUuid';
  const dummyOwnershipUuid = 'dummyOwnershipUuid';
  const dummyLatitude = 'dummyLatitude';
  const dummyLongitude = 'dummyLongitude';
  const dummyCreatedAt = new Date();
  const dummyUpdatedAt = new Date();

  const connectionDomain = new ConnectionDomain(
    dummyUuid,
    dummyUserUuid,
    dummySystemUuid,
    dummyPlatformUuid,
    dummyOwnershipUuid,
    dummyLatitude,
    dummyLongitude,
    dummyCreatedAt,
    dummyUpdatedAt
  );

  afterEach(() => jest.clearAllMocks())

  it('should have it`s instance be truthy', () => {
    expect(connectionDomain).toBeTruthy()
  })
});
