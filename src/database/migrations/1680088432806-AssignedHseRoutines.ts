import { MigrationInterface, QueryRunner } from "typeorm";

export class AssignedHseRoutines1680088432806 implements MigrationInterface {
    name = 'AssignedHseRoutines1680088432806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD \`version\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP COLUMN \`version\``);
    }

}
