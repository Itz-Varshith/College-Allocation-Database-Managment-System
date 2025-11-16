-- CreateIndex
CREATE INDEX "Preferences_student_id_preference_number_idx" ON "Preferences"("student_id", "preference_number");

-- CreateIndex
CREATE INDEX "Preferences_student_id_idx" ON "Preferences"("student_id");
