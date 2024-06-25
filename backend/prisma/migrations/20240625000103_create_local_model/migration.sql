-- CreateTable
CREATE TABLE "LocalType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "LocalType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Local" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "complement" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "entries" TEXT NOT NULL,
    "turnstiles" TEXT NOT NULL,
    "localTypeId" INTEGER NOT NULL,

    CONSTRAINT "Local_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Local" ADD CONSTRAINT "Local_localTypeId_fkey" FOREIGN KEY ("localTypeId") REFERENCES "LocalType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
