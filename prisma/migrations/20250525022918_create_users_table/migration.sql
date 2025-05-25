/*
  Warnings:

  - The `is_verified` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lat` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lang` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "is_verified",
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "ktp_url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "selfie_url" SET DATA TYPE VARCHAR(255),
DROP COLUMN "lat",
ADD COLUMN     "lat" DOUBLE PRECISION,
DROP COLUMN "lang",
ADD COLUMN     "lang" DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
