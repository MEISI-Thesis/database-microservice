import { OwnershipDomain } from './ownership.domain';

describe('OwnershipDomain', () => {
  const dummyUuid = 'dummyUuid';
  const dummyDesignation = 'dummyDesignation';

  const ownershipDomain = new OwnershipDomain(
    dummyUuid,
    dummyDesignation
  );

  afterEach(() => jest.clearAllMocks())

  it('should have it`s instance be truthy', () => {
    expect(ownershipDomain).toBeTruthy()
  })
});
