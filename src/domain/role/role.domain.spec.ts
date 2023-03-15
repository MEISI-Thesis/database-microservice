import { RoleDomain } from './role.domain';

describe('RoleDomain', () => {
  const dummyUuid = 'dummyUuid';
  const dummyDesignation = 'dummyDesignation';

  const roleDomain = new RoleDomain(
    dummyUuid,
    dummyDesignation
  );

  afterEach(() => jest.clearAllMocks())

  it('should have it`s instance be truthy', () => {
    expect(roleDomain).toBeTruthy()
  })
});
