// This file has something to do with Prisma Client Singleton
// The source I was referencing recommended making this, but it doesn't look essential.
// I believe it just prevents multiple client instances in dev, so it's just a protection doc.

import { PrismaClient } from "@prisma/client/";

const globalForPrisma = global as unknown as { prisma?: PrismaClient }

export const prisma = 
globalForPrisma.prisma ??
new PrismaClient({
  log: ["query", "info", "warn", "error"]
});