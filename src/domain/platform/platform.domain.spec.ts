import { PlatformDomain } from './platform.domain';

describe('PlatformDomain', () => {
  const dummyUuid = 'dummyUuid';
  const dummyDesignation = 'dummyDesignation';

  const platformDomain = new PlatformDomain(
    dummyUuid,
    dummyDesignation
  );

  afterEach(() => jest.clearAllMocks())

  it('should have it`s instance be truthy', () => {
    expect(platformDomain).toBeTruthy()
  })
});
