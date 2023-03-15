export class ConnectionDomain {
  public constructor (
    private readonly _uuid: string,
    private readonly _userUuid: string,
    private readonly _systemUuid: string,
    private readonly _platformUuid: string,
    private readonly _ownershipUuid: string,
    private readonly _latitude: string,
    private readonly _longitude: string,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date
  ) {}

  public get uuid (): string {
    return this._uuid;
  }

  public get userUuid (): string {
    return this._userUuid;
  }

  public get systemUuid (): string {
    return this._systemUuid;
  }

  public get platformUuid (): string {
    return this._platformUuid;
  }

  public get ownershipUuid (): string {
    return this._ownershipUuid;
  }

  public get latitude (): string {
    return this._latitude;
  }

  public get longitude (): string {
    return this._longitude;
  }

  public get createdAt (): Date {
    return this._createdAt;
  }

  public get updatedAt (): Date {
    return this._updatedAt;
  }
}
