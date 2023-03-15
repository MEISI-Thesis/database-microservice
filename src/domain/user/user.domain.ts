export class UserDomain {
  public constructor (
    private readonly _uuid: string,
    private readonly _email: string,
    private readonly _phoneNumber: string,
    private readonly _accessCode: string,
    private readonly _firstName: string,
    private readonly _lastName: string,
    private readonly _dateBirth: string,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date
  ) {}

  public get uuid (): string {
    return this._uuid;
  }

  public get email (): string {
    return this._email;
  }

  public get phoneNumber (): string {
    return this._phoneNumber;
  }

  public get accessCode (): string {
    return this._accessCode;
  }

  public get firstName (): string {
    return this._firstName;
  }

  public get lastName (): string {
    return this._lastName;
  }

  public get dateBirth (): string {
    return this._dateBirth;
  }

  public get createdAt (): Date {
    return this._createdAt;
  }

  public get updatedAt (): Date {
    return this._updatedAt;
  }
}
