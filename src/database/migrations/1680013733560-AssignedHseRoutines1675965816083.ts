import { MigrationInterface, QueryRunner } from "typeorm";

export class AssignedHseRoutines16759658160831680013733560 implements MigrationInterface {
    name = 'AssignedHseRoutines16759658160831680013733560'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD \`revised_by_person_uuid\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD \`revised_person_uuid\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD CONSTRAINT \`FK_92106a2c368ee08babb9f7bcb6e\` FOREIGN KEY (\`revised_person_uuid\`) REFERENCES \`users\`(\`uuid\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP FOREIGN KEY \`FK_92106a2c368ee08babb9f7bcb6e\``);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP COLUMN \`revised_person_uuid\``);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP COLUMN \`revised_by_person_uuid\``);
    }

}
