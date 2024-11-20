-- DropForeignKey
ALTER TABLE "bookamarks" DROP CONSTRAINT "bookamarks_userId_fkey";

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "ceasedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "message" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bookamarks" ADD CONSTRAINT "bookamarks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
