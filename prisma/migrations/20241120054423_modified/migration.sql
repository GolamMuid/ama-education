/*
  Warnings:

  - You are about to drop the column `phone` on the `Student` table. All the data in the column will be lost.
  - Added the required column `phoneNo` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "phone",
ADD COLUMN     "phoneNo" TEXT NOT NULL;
