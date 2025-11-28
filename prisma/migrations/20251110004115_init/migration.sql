/*
  Warnings:

  - You are about to drop the `CLINTE` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceProvider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CLINTE";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ServiceProvider";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "address" TEXT,
    "providerType" TEXT,
    "exhibitionType" TEXT,
    "specialization" TEXT,
    "jobTitle" TEXT,
    "avgPrice" REAL,
    "otp" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
