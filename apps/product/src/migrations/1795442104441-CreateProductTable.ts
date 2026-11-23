import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateProductTable1795442104441 implements MigrationInterface {
  name = 'CreateProductTable1795442104441'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" ("id" uuid NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(255) NOT NULL, "description" text, "sku" character varying(100) NOT NULL, "unit" character varying(50) NOT NULL, "price" double precision NOT NULL DEFAULT '0', "vat_rate" double precision NOT NULL DEFAULT '0', CONSTRAINT "UQ_34f6ca1cd897cc926bdcca1ca39" UNIQUE ("sku"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`)
  }
}
