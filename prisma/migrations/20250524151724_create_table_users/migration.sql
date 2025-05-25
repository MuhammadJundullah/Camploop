-- CreateTable
CREATE TABLE "User" (
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
