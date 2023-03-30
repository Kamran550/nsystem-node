import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewColumn16801682297031680168738781 implements MigrationInterface {
    name = 'AddNewColumn16801682297031680168738781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP COLUMN \`ad\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD \`ad\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL`);
    }

}
