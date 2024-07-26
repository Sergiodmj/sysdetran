/*
  Warnings:

  - A unique constraint covering the columns `[numero]` on the table `Processos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Processos_numero_key" ON "Processos"("numero");
