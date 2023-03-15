import { PrismaClient } from '@prisma/client'

export class DatabaseService {
  private readonly _client: PrismaClient = new PrismaClient();

  public get client (): PrismaClient {
    return this._client
  }
}
