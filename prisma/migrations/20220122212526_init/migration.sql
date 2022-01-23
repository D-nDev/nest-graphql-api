/*
  Warnings:

  - You are about to drop the column `Manufacturer` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `Stock_Quantity` on the `Products` table. All the data in the column will be lost.
  - Added the required column `manufacturer` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "Manufacturer",
DROP COLUMN "Name",
DROP COLUMN "Price",
DROP COLUMN "Stock_Quantity",
ADD COLUMN     "manufacturer" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;
