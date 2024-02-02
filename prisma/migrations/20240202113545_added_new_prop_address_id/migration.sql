/*
  Warnings:

  - Added the required column `address_id` to the `profile_commercial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile_commercial` ADD COLUMN `address_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `profile_commercial` ADD CONSTRAINT `profile_commercial_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `address_profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
