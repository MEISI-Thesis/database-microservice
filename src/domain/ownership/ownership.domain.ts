export class OwnershipDomain {
  public constructor (
    private readonly _uuid: string,
    private readonly _designation: string
  ) {}

  public get uuid (): string {
    return this._uuid;
  }

  public get designation (): string {
    return this._designation;
  }
}
