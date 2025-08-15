import { initializeData } from "./lib/db.js";

async function run() {
  await initializeData();
  console.log("Datos iniciales creados");
}

run()
  .catch(console.error)
  .finally(() => process.exit());
