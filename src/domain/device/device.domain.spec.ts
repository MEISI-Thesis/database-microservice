import { DeviceDomain } from './device.domain';

describe('DeviceDomain', () => {
  const dummyUuid = 'dummyUuid';
  const dummyUserUuid = 'dummyUserUuid';
  const dummySystemUuid = 'dummySystemUuid';
  const dummyPlatformUuid = 'dummyPlatformUuid';
  const dummyCreatedAt = new Date();
  const dummyUpdatedAt = new Date();

  const deviceDomain = new DeviceDomain(
    dummyUuid,
    dummyUserUuid,
    dummySystemUuid,
    dummyPlatformUuid,
    dummyCreatedAt,
    dummyUpdatedAt
  );

  afterEach(() => jest.clearAllMocks())

  it('should have it`s instance be truthy', () => {
    expect(deviceDomain).toBeTruthy()
  })
});
