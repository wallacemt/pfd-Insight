// biome-ignore-all lint/nursery/noAwaitInLoop: seed simples e sequencial
import { db, sql } from "./connection";
import { devDebugger } from "../utils/devDebugger";
import { donationCategoryData } from "./seeds/donationCategory";
import { ongSeedData } from "./seeds/ongsSeed";
import { eq } from "drizzle-orm";
import { ongs } from "./schemas/ongs";
import { donationItemsCategory } from "./schemas/donationItemsCategory";

async function seedCategories() {
  for (const item of donationCategoryData) {
    if (
      !(await db.query.donationItemsCategory.findFirst({
        where: eq(donationItemsCategory.categoryId, item.categoryId),
      }))
    )
      await db.insert(donationItemsCategory).values(item).execute();
  }
}
export async function seedOngs() {
  for (const ong of ongSeedData) {
    if (
      !(
        (await db.query.ongs.findFirst({ where: eq(ongs.email, ong.email) })) ||
        !(await db.query.ongs.findFirst({ where: eq(ongs.placeId, ong.placeId) }))
      )
    ) {
      await db.insert(ongs).values(ong).execute();
    }
  }
}
export async function main() {
  await seedCategories();
  await seedOngs();
  await sql.end();
}

devDebugger("Database seeded");
main().catch(() => {
  process.exit(1);
});
