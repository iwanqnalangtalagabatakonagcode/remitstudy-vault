import { prisma } from "./prisma.js";

await prisma.paymentRecord.upsert({
  where: { externalId: "demo-remitstudy-vault" },
  update: {},
  create: {
    externalId: "demo-remitstudy-vault",
    owner: "GDEMO",
    target: 1000000,
    status: "seeded",
    projectName: "RemitStudy Vault",
  },
});

console.log("Seeded RemitStudy Vault");
await prisma.$disconnect();
