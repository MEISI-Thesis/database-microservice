import { AddressDomain } from './address.domain';

describe('AddressDomain', () => {
  const dummyUuid = 'dummyUuid';
  const dummyUserUuid = 'dummyUserUuid';
  const dummyLatitude = 'dummyLatitude';
  const dummyLongitude = 'dummyLongitude';
  const dummyStreet = 'dummyStreet';
  const dummyCity = 'dummyCity';
  const dummyCountry = 'dummyCountry';
  const dummyPostalCode = 'dummyPostalCode';
  const dummyCreatedAt = new Date();
  const dummyUpdatedAt = new Date();

  const addressDomain = new AddressDomain(
    dummyUuid,
    dummyUserUuid,
    dummyLatitude,
    dummyLongitude,
    dummyStreet,
    dummyCity,
    dummyCountry,
    dummyPostalCode,
    dummyCreatedAt,
    dummyUpdatedAt
  );

  afterEach(() => jest.clearAllMocks())

  it('should have it`s instance be truthy', () => {
    expect(addressDomain).toBeTruthy()
  })
});
