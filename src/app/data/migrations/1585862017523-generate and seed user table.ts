import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from '../entities/user.entity';

export class GenerateAndSeedUserTable1585862017523 implements MigrationInterface {
  name = 'generateAndSeedUserTable1585862017523';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "firstname" varchar NOT NULL, "lastname" varchar NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`,
      undefined,
    );
    await this.seed();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`, undefined);
  }

  private async seed(): Promise<void> {
    await getRepository(User).save([
      {
        id: 1,
        username: 'jmw5598',
        firstname: 'Jason',
        lastname: 'White',
      },
      {
        id: 2,
        username: 'djt2020',
        firstname: 'Daniel',
        lastname: 'Townswell',
      },
      {
        id: 3,
        username: 'dlw3512',
        firstname: 'Danielle',
        lastname: 'Whitemore',
      },
    ] as User[]);
  }
}
