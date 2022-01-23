-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Manufacturer" TEXT NOT NULL,
    "Stock_Quantity" INTEGER NOT NULL,
    "Price" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
