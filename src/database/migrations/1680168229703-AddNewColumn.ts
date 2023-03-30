import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewColumn1680168229703 implements MigrationInterface {
    name = 'AddNewColumn1680168229703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP FOREIGN KEY \`FK_92106a2c368ee08babb9f7bcb6e\``);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` CHANGE \`revised_person_uuid\` \`ad\` varchar(36) COLLATE "utf8mb4_unicode_ci" NULL`);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP COLUMN \`ad\``);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD \`ad\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD CONSTRAINT \`FK_d0151163f86fe99db67e2189bd8\` FOREIGN KEY (\`revised_by_person_uuid\`) REFERENCES \`users\`(\`uuid\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP FOREIGN KEY \`FK_d0151163f86fe99db67e2189bd8\``);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` DROP COLUMN \`ad\``);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD \`ad\` varchar(36) COLLATE "utf8mb4_unicode_ci" NULL`);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` CHANGE \`ad\` \`revised_person_uuid\` varchar(36) COLLATE "utf8mb4_unicode_ci" NULL`);
        await queryRunner.query(`ALTER TABLE \`assigned_hse_routines\` ADD CONSTRAINT \`FK_92106a2c368ee08babb9f7bcb6e\` FOREIGN KEY (\`revised_person_uuid\`) REFERENCES \`users\`(\`uuid\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
