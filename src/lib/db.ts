// src/lib/db.ts
import { PrismaClient } from "@prisma/client";

console.log("Cargando el módulo de db.ts...");

const prismaClientSingleton = () => {
  console.log("Creando una nueva instancia de PrismaClient...");
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prismaGlobal ?? prismaClientSingleton();

export { db };

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = db;
}