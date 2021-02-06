-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "material" TEXT NOT NULL,
    "peculiarity" TEXT NOT NULL,
    "packing" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product.name_unique" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product.slug_unique" ON "Product"("slug");

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
