/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "role" VARCHAR(100) NOT NULL,
    "gender" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(100) NOT NULL,
    "is_verified" VARCHAR(100) NOT NULL,
    "ktp_url" VARCHAR(100) NOT NULL,
    "selfie_url" VARCHAR(100) NOT NULL,
    "lat" VARCHAR(100) NOT NULL,
    "lang" VARCHAR(100) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
