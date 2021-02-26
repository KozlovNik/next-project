/*
  Warnings:

  - The migration will change the primary key for the `CartItem` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `userid` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `productid` on the `Feedback` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[cartId,productId]` on the table `CartItem`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[userId,productId]` on the table `Feedback`. If there are existing duplicate values, the migration will fail.
  - Added the required column `userId` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Feedback_userid_productid_key";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_productid_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_userid_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "userid",
DROP COLUMN "productid",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "productId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_userid_productid_key" ON "CartItem"("cartId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_userid_productid_key" ON "Feedback"("userId", "productId");

-- AddForeignKey
ALTER TABLE "Feedback" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
