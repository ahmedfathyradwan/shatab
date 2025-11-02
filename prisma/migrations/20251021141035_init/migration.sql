-- CreateTable
CREATE TABLE "ServiceProvider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "providerType" TEXT NOT NULL,
    "exhibitionType" TEXT,
    "specialization" TEXT,
    "jobTitle" TEXT,
    "avgPrice" REAL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceProvider_phone_key" ON "ServiceProvider"("phone");
