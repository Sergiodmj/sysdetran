-- CreateTable
CREATE TABLE "Processos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "datahj" DATETIME NOT NULL,
    "numero" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "obs" TEXT NOT NULL
);
