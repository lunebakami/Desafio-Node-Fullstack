-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_localId_fkey";

-- DropForeignKey
ALTER TABLE "Local" DROP CONSTRAINT "Local_localTypeId_fkey";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "localId" DROP NOT NULL,
ALTER COLUMN "eventTypeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Local" ALTER COLUMN "localTypeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Local" ADD CONSTRAINT "Local_localTypeId_fkey" FOREIGN KEY ("localTypeId") REFERENCES "LocalType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_localId_fkey" FOREIGN KEY ("localId") REFERENCES "Local"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
