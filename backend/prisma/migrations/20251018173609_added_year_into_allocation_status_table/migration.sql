/*
  Warnings:

  - Added the required column `year` to the `Allocation_Status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "admin_id" DROP DEFAULT;
DROP SEQUENCE "Admin_admin_id_seq";

-- AlterTable
ALTER TABLE "Allocation_Status" ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Round" ALTER COLUMN "round_number" DROP DEFAULT;
DROP SEQUENCE "Round_round_number_seq";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "student_id" DROP DEFAULT;
DROP SEQUENCE "Student_student_id_seq";
