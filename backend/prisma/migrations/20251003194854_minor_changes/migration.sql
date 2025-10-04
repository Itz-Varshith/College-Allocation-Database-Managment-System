/*
  Warnings:

  - The primary key for the `Preferences` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "public"."Preferences_student_id_preference_number_key";

-- AlterTable
ALTER TABLE "public"."Preferences" DROP CONSTRAINT "Preferences_pkey",
ADD CONSTRAINT "Preferences_pkey" PRIMARY KEY ("student_id", "preference_number");
