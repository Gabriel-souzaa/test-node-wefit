/*
  Warnings:

  - You are about to drop the column `city` on the `profile_commercial` table. All the data in the column will be lost.
  - You are about to drop the column `complement` on the `profile_commercial` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood` on the `profile_commercial` table. All the data in the column will be lost.
  - You are about to drop the column `numbero` on the `profile_commercial` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `profile_commercial` table. All the data in the column will be lost.
  - You are about to drop the column `steet` on the `profile_commercial` table. All the data in the column will be lost.
  - You are about to drop the column `zip_code` on the `profile_commercial` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profile_commercial` DROP COLUMN `city`,
    DROP COLUMN `complement`,
    DROP COLUMN `neighborhood`,
    DROP COLUMN `numbero`,
    DROP COLUMN `state`,
    DROP COLUMN `steet`,
    DROP COLUMN `zip_code`;

-- CreateTable
CREATE TABLE `address_profile` (
    `id` VARCHAR(191) NOT NULL,
    `zip_code` VARCHAR(191) NOT NULL,
    `steet` VARCHAR(191) NOT NULL,
    `numbero` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
