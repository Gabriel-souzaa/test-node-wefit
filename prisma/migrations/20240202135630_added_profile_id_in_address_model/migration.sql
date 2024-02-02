/*
  Warnings:

  - You are about to drop the column `address_id` on the `profile_commercial` table. All the data in the column will be lost.
  - Added the required column `profile_id` to the `address_profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profile_commercial` DROP FOREIGN KEY `profile_commercial_address_id_fkey`;

-- AlterTable
ALTER TABLE `address_profile` ADD COLUMN `profile_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profile_commercial` DROP COLUMN `address_id`;

-- AddForeignKey
ALTER TABLE `address_profile` ADD CONSTRAINT `address_profile_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profile_commercial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
