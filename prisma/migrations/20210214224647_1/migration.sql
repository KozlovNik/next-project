/*
  Warnings:

  - You are about to drop the column `country` on the `Product` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "country",
ADD COLUMN     "countryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country.name_unique" ON "Country"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
