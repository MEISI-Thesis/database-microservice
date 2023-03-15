import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  it('should have PrismaClient to be truthy', () => {
    const databaseService = new DatabaseService();

    expect(databaseService).toBeTruthy()
  })
});
