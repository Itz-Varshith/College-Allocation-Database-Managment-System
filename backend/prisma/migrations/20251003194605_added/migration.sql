/*
  Warnings:

  - A unique constraint covering the columns `[student_id,preference_number]` on the table `Preferences` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Preferences_student_id_preference_number_key" ON "public"."Preferences"("student_id", "preference_number");
