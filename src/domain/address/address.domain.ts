export class AddressDomain {
  public constructor (
    private readonly _uuid: string,
    private readonly _userUuid: string,
    private readonly _latitude: string,
    private readonly _longitude: string,
    private readonly _street: string,
    private readonly _city: string,
    private readonly _country: string,
    private readonly _postalCode: string,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date
  ) {}

  public get uuid (): string {
    return this._uuid;
  }

  public get userUuid (): string {
    return this._userUuid;
  }

  public get latitude (): string {
    return this._latitude;
  }

  public get longitude (): string {
    return this._longitude;
  }

  public get street (): string {
    return this._street;
  }

  public get city (): string {
    return this._city;
  }

  public get country (): string {
    return this._country;
  }

  public get postalCode (): string {
    return this._postalCode;
  }

  public get createdAt (): Date {
    return this._createdAt;
  }

  public get updatedAt (): Date {
    return this._updatedAt;
  }
}
