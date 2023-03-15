import { SystemDomain } from './system.domain';

describe('SystemDomain', () => {
  const dummyUuid = 'dummyUuid';
  const dummyDesignation = 'dummyDesignation';

  const systemDomain = new SystemDomain(
    dummyUuid,
    dummyDesignation
  );

  afterEach(() => jest.clearAllMocks())

  it('should have it`s instance be truthy', () => {
    expect(systemDomain).toBeTruthy()
  })
});
